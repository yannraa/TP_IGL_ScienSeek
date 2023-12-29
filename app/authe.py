from fastapi.security import OAuth2PasswordBearer
from jose import JWTError
import jwt
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
        roles: list = payload.get("roles", [])
        token_data = schemas.TokenData(email=email, roles=roles)
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
    if "administrateur" not in [role.name for role in current_user.roles]:
        raise HTTPException(
            status_code=403, detail="The user doesn't have enough privileges"
        )
    return current_user

async def get_current_active_moderator(
    current_user: models.User = Depends(get_current_user),
) -> models.User:
    if "moderateur" not in [role.name for role in current_user.roles]:
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
def sign_up_new_user(db: Session, email: str, password: str):
    user = get_user_by_email(db, email)
    if user:
        return False  # User already exists
    new_user = create_user(
        db,
        schemas.UserCreate(
            email=email,
            password=password,
            is_active=True,
            role=["utilisateur"],
        ),
    )
    return new_user