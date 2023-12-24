from fastapi import FastAPI, HTTPException, Depends, status
from pydantic import BaseModel , EmailStr
from typing import Annotated
import modelsmysql
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from enum import Enum
from modelsmysql import Utilisateur, Moderateur, Administrateur
app = FastAPI()
modelsmysql.Base.metadata.create_all(bind=engine)
class PostBase(BaseModel):
    titre:str
    contenu: str
    utilisateur_id: int

class Sexe(str, Enum):
    masculin = "masculin"
    feminin = "feminin"

class UtilisateurBase(BaseModel):
    nom : str
    motdepasse : str
    sexe : Sexe
    email : EmailStr
class AdministrateurBase(BaseModel):
    nom : str
    motdepasse : str
    sexe : Sexe
    email : EmailStr
    
class ModerateurBase(BaseModel):
     nom : str
     motdepasse : str
     sexe : Sexe
     email : EmailStr
    

def get_db():
    db = SessionLocal()
    try:
        yield db
    
    finally:
        db.close()
    
db_dependency = Annotated[Session, Depends(get_db)]

@app.post("/posts/",status_code=status.HTTP_201_CREATED)
async def create_post(post: PostBase, db: db_dependency):
   db_post = modelsmysql.Post(**post.dict())
   db.add(db_post)
   db.commit()
   
@app.get("/posts/{post_id}",status_code=status.HTTP_200_OK)
async def read_post(post_id: int, db: db_dependency):
    post = db.query(modelsmysql.Post).filter(modelsmysql.Post.id == post_id).first()
    if post is None:
        raise HTTPException(status_code=404,detail='post non trouvé')
    return post

@app.delete("/posts/{post_id}",status_code=status.HTTP_200_OK)
async def delete_post(post_id: int, db: Session = Depends(get_db)):
     db_post = db.query(modelsmysql.Post).filter(modelsmysql.Post.id == post_id).first()
     if db_post is None:
         raise HTTPException(status_code=404,detail='Post non trouvé')
     db.delete(db_post) 
     db.commit()

@app.post("/utilisateurs/", status_code=status.HTTP_201_CREATED)
async def create_utilisateur(utilisateur: UtilisateurBase, db: db_dependency):
    db_utilisateur = modelsmysql.Utilisateur(**utilisateur.dict())
    db.add(db_utilisateur)
    db.commit()
    db.refresh(db_utilisateur)


@app.get("/utilisateurs/{utilisateur_id}",status_code=status.HTTP_200_OK)
async def read_utilisateur(utilisateur_id: int, db: db_dependency):
    utilisateur = db.query(modelsmysql.Utilisateur).filter(modelsmysql.Utilisateur.id == utilisateur_id).first()
    if utilisateur is None:
        raise HTTPException(status_code=404,detail='Utilisateur non trouvé')
    
    return utilisateur


@app.post("/moderateurs/", status_code=status.HTTP_201_CREATED)
async def create_moderateur(moderateur: ModerateurBase, db: db_dependency):
    db_moderateur = modelsmysql.Moderateur(**moderateur.dict())
    db.add(db_moderateur)
    db.commit()
    db.refresh(db_moderateur)


@app.get("/moderateurs/{moderateur_id}",status_code=status.HTTP_200_OK)
async def read_moderateur(moderateur_id: int, db: db_dependency):
    moderateur = db.query(modelsmysql.moderateur).filter(modelsmysql.moderateur.id == moderateur_id).first()
    if  moderateur is None:
        raise HTTPException(status_code=404,detail='Moderateur non trouvé')
    
    return moderateur

@app.post("/administrateurs/", status_code=status.HTTP_201_CREATED)
async def create_administrateur(administrateur: AdministrateurBase, db: db_dependency):
    db_administrateur = modelsmysql.Administrateur(**administrateur.dict())
    db.add(db_administrateur)
    db.commit()
    db.refresh(db_administrateur)
    return db_administrateur


@app.get("/administrateurs/{administrateur_id}", status_code=status.HTTP_200_OK)
async def read_administrateur(administrateur_id: int, db: db_dependency):
    administrateur = db.query(modelsmysql.Administrateur).filter(modelsmysql.Administrateur.id == administrateur_id).first()
    if administrateur is None:
        raise HTTPException(status_code=404, detail='Administrateur non trouvé')
    return administrateur