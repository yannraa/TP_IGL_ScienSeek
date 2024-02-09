from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.elastic.elastic_config import create_index
from app.routers import auth, users, administrateur, article, search
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["PUT", "POST", "GET", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)


app.include_router(users.users_router)
app.include_router(auth.auth_router)
app.include_router(administrateur.admin_router)
app.include_router(article.router, prefix="/article", tags=["article"])
app.include_router(search.router, prefix="/search", tags=["search"])

create_index()  
@app.options("/token")
async def options_token():
    return {"Allow": "GET, POST, OPTIONS"}
@app.get("/")
def root():
    return {"message": "Hello to our application Scienseek"}
