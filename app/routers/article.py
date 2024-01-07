from sqlalchemy.orm import Session
from app.db import crud, models
from app.elastic.elastic_utils import es
from app.db.database import get_db
import typing as t
from fastapi import APIRouter, Depends, File, UploadFile, HTTPException
from app.authe import get_current_active_admin
from app.db.crud import save_uploaded_file
router = APIRouter()


@router.get("/articles", response_model=None)
async def get_articles(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_articles(db, skip=skip, limit=limit)

@router.get("/article/{article_id}", response_model=None)
async def read_article(article_id: int, db: Session = Depends(get_db)):
    article = crud.get_article(db, article_id=article_id)
    if article is None:
        raise HTTPException(status_code=404, detail="Article not found")
    return article

@router.get("/search", response_model=None)
async def search_articles(query: str, db: Session = Depends(get_db)):
    return crud.search_articles(db, query=query)

@router.post("/upload-article")
async def upload_article(
    title: str,
    abstract: str,
    text: str,
    pdf_file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_active_admin),
):
    # Gérer le fichier PDF ici (le sauvegarder et obtenir son URL)
    pdf_url = save_uploaded_file(pdf_file)

    # Créer un nouvel article dans la base de données
    article_data = {
        "title": title,
        "abstract": abstract,
        "text": text,
        "pdf_url": pdf_url,  # Utilisez le chemin réel du fichier PDF
        "authors": [],  # Ajouter les auteurs si nécessaire
        "keywords": [],  # Ajouter les mots-clés si nécessaire
        # Autres détails de l'article...
    }

    article = crud.create_article(db, article_data)

    # Indexer l'article dans Elasticsearch
    es.index_article(article.id, title, abstract, text)

    return {"message": "Article uploaded successfully"}
