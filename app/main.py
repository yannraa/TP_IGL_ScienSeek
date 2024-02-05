from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.elastic.elastic_config import create_index
from app.routers import auth, users, administrateur, article, search

app = FastAPI()

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(users.users_router)
app.include_router(auth.auth_router)
app.include_router(administrateur.admin_router)
app.include_router(article.router, prefix="/article", tags=["article"])
app.include_router(search.router, prefix="/search", tags=["search"])

create_index()  

@app.get("/")
def root():
    return {"message": "Hello World pushing out to ubuntu"}
