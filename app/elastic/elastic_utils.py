from elasticsearch import Elasticsearch
from .elastic_config import ELASTICSEARCH_URL, INDEX_NAME

es = Elasticsearch([ELASTICSEARCH_URL])

def create_index():
    es.indices.create(index=INDEX_NAME, ignore=400)

def index_article(article_id, title, abstract, text):
    body = {
        "title": title,
        "abstract": abstract,
        "text": text,
    }
    es.index(index=INDEX_NAME, id=article_id, body=body)

def search_articles(query):
    body = {
        "query": {
            "multi_match": {
                "query": query,
                "fields": ["title^2", "abstract", "text"]
            }
        }
    }
    result = es.search(index=INDEX_NAME, body=body)
    hits = result.get("hits", {}).get("hits", [])
    article_ids = [hit["_id"] for hit in hits]
    return article_ids
