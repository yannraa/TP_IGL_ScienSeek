from fastapi import HTTPException
from app.elastic.elastic_config import es, INDEX_NAME
from app.db.modelsarticle import Article
from datetime import datetime
from uuid import UUID, uuid4 
def create_article(article: Article):
    try:
        # Assurez-vous que la date est correctement formatée
        article.publication_date = datetime.strptime(article.publication_date, "%Y-%m-%d").date()
    
        # Ajouter l'article à Elasticsearch
        es.index(index=INDEX_NAME, body=article.dict(), refresh=True)
        return {"message": "Article créé avec succès"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la création de l'article : {str(e)}")


def read_article(article_id: int):
    try:
        # Récupérer l'article depuis Elasticsearch
        article = es.get(index=INDEX_NAME, id=article_id)
        return article["_source"]
    except Exception as e:
        raise HTTPException(status_code=404, detail=f"Article non trouvé : {str(e)}")




def update_article(article_id: int, updated_article: Article):
    try:
        # Mettre à jour l'article dans Elasticsearch
        es.index(index=INDEX_NAME, id=article_id, body=updated_article.dict(), refresh=True)
        return {"message": "Article mis à jour avec succès"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la mise à jour de l'article : {str(e)}")

def delete_article(article_id: int):
    try:
        # Vérifiez d'abord si l'article existe
        if not es.exists(index=INDEX_NAME, id=article_id):
            raise HTTPException(status_code=404, detail="Article non trouvé")

        # Supprimer l'article de Elasticsearch
        es.delete(index=INDEX_NAME, id=article_id, refresh=True)
        return {"message": "Article supprimé avec succès"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur lors de la suppression de l'article : {str(e)}")

