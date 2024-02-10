from fastapi.testclient import TestClient
from main import app  # Assurez-vous que "main" est le module où se trouve votre application FastAPI

client = TestClient(app)

def test_search_articles():
    # Préparez les données de requête pour la recherche d'articles
    query_params = {
        "query": "votre_query",
        "authors": "auteurs",  
        "institutions": "institutions",  # Laissez vide si vous ne souhaitez pas filtrer par institutions
        "start_date": "date_debut", 
        "keyword": "mot_cle"
    }

    # Envoyez une requête GET avec les paramètres de requête
    response = client.get("/search/", params=query_params)

    # Vérifiez que la réponse a un code de statut HTTP 200 (succès)
    assert response.status_code == 200


