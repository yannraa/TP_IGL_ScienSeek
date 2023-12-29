
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import APIRouter, Depends, HTTPException, status
from datetime import timedelta

from pytest import Session
from app.db import database

from app.db.database import get_db
from app.routers import security
from app.authe import authenticate_user,sign_up_new_user
from app.db.models import UserRole  # Import your UserRole Enum

auth_router = r = APIRouter()



r = APIRouter()

def authenticate_user(db: Session, email: str, password: str):
    user = database.get_user_by_email(db, email)
    if not user or not security.verify_password(password, user.hashed_password):
        return None
    return user

@r.post("/token")
async def login(
    db: Session = Depends(database.get_db),
    form_data: OAuth2PasswordRequestForm = Depends()
):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = timedelta(
        minutes=security.ACCESS_TOKEN_EXPIRE_MINUTES
    )
    
    # Assign permissions based on user role
    permissions = [user.role.name]  # Use role name as string
    access_token = security.create_access_token(
        data={"sub": user.email, "permissions": permissions},
        expires_delta=access_token_expires,
    )

    return {"access_token": access_token, "token_type": "bearer"}


@r.post("/signup")
async def signup( 
    db: Session = Depends(database.get_db),
    form_data: OAuth2PasswordRequestForm = Depends()
):
    user = sign_up_new_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Account already exists",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token_expires = timedelta(
        minutes=security.ACCESS_TOKEN_EXPIRE_MINUTES
    )

    # Assign permissions based on user role
    permissions = [user.role.name]  # Use role name as string
    access_token = security.create_access_token(
        data={"sub": user.email, "permissions": permissions},
        expires_delta=access_token_expires,
    )

    return {"access_token": access_token, "token_type": "bearer"}