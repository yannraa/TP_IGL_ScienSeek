# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.elastic.elastic_config import create_index
from app.routers import auth, users, administrateur, article, search
from fastapi.responses import FileResponse
from starlette.responses import RedirectResponse
from starlette.requests import Request
from fastapi.responses import HTMLResponse

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.mount("/", StaticFiles(directory="/home/mehdi/Tpigl/TP_IGL_ScienSeek/build", html=True), name="static")

app.include_router(users.users_router)
app.include_router(auth.auth_router)
app.include_router(administrateur.admin_router)
app.include_router(article.router, prefix="/article", tags=["article"])
app.include_router(search.router, prefix="/search", tags=["search"])

create_index()

# This is to serve your index.html file

# Other routes
app.get("/")
def root():
    return FileResponse("/home/mehdi/Tpigl/TP_IGL_ScienSeek/src/components/PageRechPage.js")

@app.get("/login")
def login():
    return FileResponse("/home/mehdi/Tpigl/TP_IGL_ScienSeek/src/components/LoginPage.js")


@app.get("/admin")
def admin_page():
    return FileResponse("/home/mehdi/Tpigl/TP_IGL_ScienSeek/src/components/PageAdmin.js")

@app.get("/articlePage")
def article_page():
    return FileResponse("/home/mehdi/Tpigl/TP_IGL_ScienSeek/src/components/ArticlePage.js")
