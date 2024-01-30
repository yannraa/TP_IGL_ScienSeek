from sqlalchemy.orm import Session 
from app.db.modelsarticle import Article
import typing as t
from fastapi import APIRouter, Depends, File, UploadFile, HTTPException
from app.db.modelsarticle import Article
from elasticsearch import Elasticsearch
from elasticsearch_dsl import Search, Q
from app.db.crud_article import create_article, read_article, update_article, delete_article
router = APIRouter()

@router.post("/create/")
async def create_article_route(article: Article):
    return create_article(article)

@router.get("/read/{article_id}")
async def read_article_route(article_id: int):
    result = read_article(article_id)
    if result:
        return {"article": result}
    else:
        raise HTTPException(status_code=404, detail="Article non trouvé")

@router.put("/update/{article_id}")
async def update_article_route(article_id: int, updated_article: Article):
    return update_article(article_id, updated_article)

@router.delete("/delete/{article_id}")
async def delete_article_route(article_id: int):
    return delete_article(article_id)
