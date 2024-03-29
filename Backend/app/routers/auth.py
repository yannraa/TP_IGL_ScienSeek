
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import APIRouter, Depends, Form, HTTPException, status
from datetime import timedelta
from sqlalchemy import Integer
from pytest import Session
from app.db import database
from app.db.models import UserRole
from app.db.database import get_db
from app.routers import security
from app.authe import authenticate_user,sign_up_new_user,create_admin_user,get_role_user

auth_router = r = APIRouter()

@r.post("/token")
async def login(
    db: Session = Depends(database.get_db),
    form_data: OAuth2PasswordRequestForm = Depends(),
):
    user = authenticate_user(db,form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = timedelta(
        minutes=security.ACCESS_TOKEN_EXPIRE_MINUTES
    )
    
    permissions = [user.role]
    access_token = security.create_access_token(
        data={"sub": user.email, "permissions": permissions},
        expires_delta=access_token_expires,
    )

    return {"access_token": access_token, "token_type": "bearer"}

@r.post("/signup")
async def signup(
    db: Session = Depends(database.get_db),
    email: str = Form(...),
    first_name: str = Form(...),
    last_name: str = Form(...),
    form_data: OAuth2PasswordRequestForm = Depends(),
):
    user = sign_up_new_user(db,email,first_name, last_name,form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Account already exists",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = timedelta(minutes=security.ACCESS_TOKEN_EXPIRE_MINUTES)
    permissions = [user.role]
    access_token = security.create_access_token(
        data={"sub": user.email, "permissions": permissions},
        expires_delta=access_token_expires,
    )

    return {"access_token": access_token, "token_type": "bearer"}

@r.post("/users/me")
async def create_administrateur_initial(
    db: Session = Depends(database.get_db),
    email: str = Form(...),
    form_data: OAuth2PasswordRequestForm = Depends(),
):
    if (get_role_user(db,1)):
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Admin already exists",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user= create_admin_user(db, email, form_data.username, form_data.password)
    if user:
        return {"message": "Admin created successfully"}
    else:
        return {"message": "Admin creation failed"}
    

   