from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t

from . import models, schemas
from app.routers.security import get_password_hash
from app.db.models import UserRole  # Import your UserRole Enum

from app.elastic.elastic_utils import es, INDEX_NAME
from app.elastic.elastic_config import INDEX_NAME
from app.db.modelsarticle import Article
from fastapi import UploadFile
import shutil
import os

from fastapi import UploadFile

def get_user(db: Session, user_id: int):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def get_user_by_email(db: Session, email: str) -> schemas.UserBase:
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(
    db: Session, skip: int = 0, limit: int = 100
) -> t.List[schemas.UserOut]:
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        email=user.email,
        first_name=user.first_name,
        last_name=user.last_name,
        hashed_password=hashed_password,
        username=user.username,
        is_active=user.is_active,
        role=user.role,  
     
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user(db: Session, user_id: int):
    user = get_user(db, user_id)
    if not user:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
    db.delete(user)
    db.commit()
    return user


def edit_user(
    db: Session, user_id: int, user: schemas.UserEdit
) -> schemas.User:
    db_user = get_user(db, user_id)
    if not db_user:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
    update_data = user.dict(exclude_unset=True)

    if "password" in update_data:
        update_data["hashed_password"] = get_password_hash(user.password)
        del update_data["password"]

    for key, value in update_data.items():
        setattr(db_user, key, value)

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

INDEX_NAME = "articles"

# Définir un répertoire de stockage pour les fichiers PDF
pdf_storage_path = "chemin/vers/le/repertoire_de_stockage"

def save_uploaded_file(upload_file: UploadFile):
    # Assurez-vous que le répertoire de stockage existe
    os.makedirs(pdf_storage_path, exist_ok=True)

    # Créez le chemin complet du fichier dans le répertoire de stockage
    file_path = os.path.join(pdf_storage_path, upload_file.filename)

    # Ouvrez le fichier et copiez-y le contenu du fichier téléchargé
    with open(file_path, "wb") as file:
        shutil.copyfileobj(upload_file.file, file)

    return file_path



def create_article(db: Session, article_data: dict):
    article = models.Article(**article_data)
    db.add(article)
    db.commit()
    db.refresh(article)
    return article

def get_articles(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Article).offset(skip).limit(limit).all()

def get_article(db: Session, article_id: int):
    return db.query(models.Article).filter(models.Article.id == article_id).first()

def search_articles(db: Session, query: str):
    result = es.search(index=INDEX_NAME, body={"query": {"match": {"text": query}}})
    article_ids = [hit["_id"] for hit in result["hits"]["hits"]]
    articles = db.query(models.Article).filter(models.Article.id.in_(article_ids)).all()
    return articles