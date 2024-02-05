from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.elastic.elastic_config import create_index
from app.routers import auth, users, administrateur, article, search
from fastapi.responses import FileResponse
import os
app = FastAPI()

# Configuration CORS
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app_path = os.path.dirname(os.path.abspath(__file__))
static_files_path = os.path.join(app_path, "src")

# app.mount("/", StaticFiles(directory=static_files_path, html=True), name="static")

# Include routers
app.include_router(auth.auth_router, prefix="/api/token", tags=["auth"])
app.include_router(users.users_router, prefix="/users", tags=["users"])
app.include_router(administrateur.admin_router, prefix="/administrateur", tags=["administrateur"])
app.include_router(article.router, prefix="/article", tags=["article"])
app.include_router(search.router, prefix="/search", tags=["search"])
app.include_router(users.users_router)


# Create ElasticSearch index
create_index()
@app.get("/")
def LoginPage():
    return FileResponse("/home/mehdi/Tpigl/TP_IGL_ScienSeek/src/components/LoginPage.js")

@app.get("/recherche")
def PageRechPage():
    return FileResponse("/home/mehdi/Tpigl/TP_IGL_ScienSeek/src/components/PageRechPage.js")

@app.get("/admin")
def PageAdmin():
    return FileResponse("/home/mehdi/Tpigl/TP_IGL_ScienSeek/src/components/PageAdmin.js")


@app.get("/articlePage")
def ArticlePage():
    return FileResponse("/home/mehdi/Tpigl/TP_IGL_ScienSeek/src/components/ArticlePage.js")


@app.get("/FavorisPage")
def FavorisPage():
    return FileResponse("/home/mehdi/Tpigl/TP_IGL_ScienSeek/src/components/FavorisPage.js")