from ctypes import cast
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError
import jwt
from sqlalchemy import Integer
from jwt import algorithms
from fastapi import Depends, HTTPException, status
from jwt import PyJWTError
from app.db import models, schemas, database
from app.db.crud import get_user_by_email, create_user
from app.routers import security
from app.db.models import UserRole  # Import your UserRole Enum
from sqlalchemy.orm import Session
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()
def get_role_user(db: Session, role:int) :
    return db.query(models.User).filter(models.User.role == role).first() 

async def get_current_user(
    db: Session = Depends(database.get_db), token: str = Depends(oauth2_scheme)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(
            token, security.SECRET_KEY, algorithms=[security.ALGORITHM]
        )
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        permissions: list = payload.get("permissions")
        token_data = schemas.TokenData(email=email, permissions=permissions)
    except JWTError:
        raise credentials_exception
    user = get_user_by_email(db, token_data.email)
    if user is None:
        raise credentials_exception
    return user

async def get_current_active_user(
    current_user: models.User = Depends(get_current_user),
):
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

async def get_current_active_admin(
    current_user: models.User = Depends(get_current_user),
) -> models.User:
    if current_user.role != 1:
        raise HTTPException(
            status_code=403, detail="The user doesn't have enough privileges"
        )
    return current_user

async def get_current_active_moderator(
    current_user: models.User = Depends(get_current_user),
) -> models.User:
    if current_user.role != 3 :
        raise HTTPException(
            status_code=403, detail="The user doesn't have enough privileges"
        )
    return current_user

def authenticate_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)
    if not user:
        return False
    if not security.verify_password(password, user.hashed_password):
        return False
    
    return user

# Restrict signup to regular users
def sign_up_new_user(db: Session, email: str,first_name:str,last_name:str,username:str,password: str):
    user = get_user_by_email(db, email)
    if user:
        return False  # User already exists
    new_user = create_user(
        db,
        schemas.UserCreate(
            email=email,
            first_name=first_name,
            last_name=last_name,
            username=username,
            password=password,
         
            is_active=True,
            role=2,
        ),
    )
    return new_user
# Ajustez votre fonction create_admin_user pour retourner un booléen
def create_admin_user(db: Session, email: str, username: str, password: str):
    user = get_user_role(db, role)
    if not user:
        admin_user = create_user(
            db,
            schemas.UserCreate(
                email=email,
                username=username,
                password=password,
                first_name=None,
                last_name=None,
                is_active=True,
                role=1,
            ),
        )
        return admin_user  # Retourne True si l'admin est créé avec succès
      
def get_role_user(db: Session, role:int) :
    return db.query(models.User).filter(models.User.role == role).first() 
