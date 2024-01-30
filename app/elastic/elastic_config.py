# elastic_config.py

from elasticsearch import Elasticsearch

# Configuration d'Elasticsearch
ELASTICSEARCH_HOST = "http://localhost:9200"
INDEX_NAME = "articles_index"

# Connexion à Elasticsearch
es = Elasticsearch(hosts=[ELASTICSEARCH_HOST])

# Fonction pour créer l'index si nécessaire
def create_index():
    if not es.indices.exists(index=INDEX_NAME):
        es_index = {
            "mappings": {
                "properties": {
                    "title": {"type": "text"},
                    "abstract": {"type": "text"},
                    "authors": {"type": "nested", "properties": {"name": {"type": "text"}, "affiliation": {"type": "text"}}},
                    "institutions": {"type": "text"},
                    "keywords": {"type": "text"},
                    "full_text": {"type": "text"},
                    "pdf_url": {"type": "keyword"},
                    "publication_date": {"type": "date", "format": "yyyy-MM-dd"},
                    "references": {"type": "text"}
                }
            }
        }
        es.indices.create(index=INDEX_NAME, body=es_index, ignore=[400])
