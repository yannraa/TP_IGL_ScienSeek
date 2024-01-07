from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db import crud
from app.db.database import SessionLocal

from app.routers import auth,users,administrateur
from app.routers import article
from app.elastic.elastic_utils import create_index
# models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
create_index()
app.include_router(users.users_router)

app.include_router(auth.auth_router)
app.include_router(administrateur.admin_router)

app.include_router(article.router)

@app.get("/")
def root():
    return {"message": "Hello World pushing out to ubuntu"}
