from sqlalchemy.orm import Session
from app.db import models 
from app.db.database import get_db
from app.db.modelsarticle import Article
import typing as t
from fastapi import APIRouter, Depends, File, UploadFile, HTTPException
from app.authe import get_current_active_admin
from app.db.crud_article import read_article, update_article, create_article, delete_article

from fastapi import APIRouter, Query, HTTPException
from elasticsearch import Elasticsearch
from elasticsearch_dsl import Search, Q

router = APIRouter()
es = Elasticsearch(hosts=["http://localhost:9200"])  # Remplacez l'URL par l'URL de votre cluster Elasticsearch

# Configuration d'Elasticsearch
ELASTICSEARCH_INDEX = "articles_index"
es.indices.create(index=ELASTICSEARCH_INDEX, ignore=400)

@router.get("/search/")
async def search_articles(
    query: str = Query(..., description="Mots clés pour la recherche dans les articles"),
    authors: str = Query("", description="Liste des auteurs à filtrer"),
    institutions: str = Query("", description="Liste des institutions à filtrer"),
    start_date: str = Query(None, description="Date de début pour filtrer les articles (format: 'yyyy-MM-dd')"),
    keyword: str = Query("", description="Mot clé à filtrer")
):
    try:
        # Construction de la requête Elasticsearch
        s = Search(using=es, index=ELASTICSEARCH_INDEX)

        # Filtres
        if authors:
            s = s.query(Q("nested", path="authors", query=Q("match", authors__name=authors)))

        if institutions:
            s = s.query(Q("match", institutions=institutions))

        if start_date:
            s = s.filter("range", publication_date={"gte": start_date})


        if keyword:
            s = s.query(Q("multi_match", query=keyword, fields=["title", "abstract", "keywords", "full_text"]))

        # Triez par date de publication décroissante
        s = s.sort("-publication_date")

        # Exécution de la recherche Elasticsearch
        search_results = s.execute()

        # Traitement et renvoi des résultats
        results = search_results.to_dict()["hits"]["hits"]
        return {"results": results}

    except Exception as e:
        # Gestion des erreurs
        raise HTTPException(status_code=500, detail=str(e))
