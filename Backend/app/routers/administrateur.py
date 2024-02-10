from typing import List
from fastapi import APIRouter, Depends, HTTPException, Request, Response, security, status
from sqlalchemy.orm import Session
from app import db
from app.db import database, models
from app.db import schemas
from app.db.database import get_db
from app.routers.security import get_password_hash
from ..db.schemas import User, UserOut, UserCreate
from app.authe import get_current_active_admin,get_user_by_email
from app.routers import users
import typing as t


admin_router = rau = APIRouter()

def get_role_users(db: Session, role: int, skip: int = 0, limit: int = 100) -> t.List[schemas.UserOut]:
    return db.query(models.User).filter(models.User.role == role).offset(skip).limit(limit).all()

@rau.post("/users/moderators", response_model=schemas.UserOut, response_model_exclude_none=True)
async def create_moderator(
    request: Request,
    user: schemas.UserCreate,  # Use UserCreate directly
    db: Session = Depends(database.get_db),
    current_user=Depends(get_current_active_admin),
):
    """
    Create a new moderator (role=3)
    """
    if current_user.role != 1:  # Vérifier que l'utilisateur est un administrateur
        raise HTTPException(status_code=403, detail="Only admin can create moderators")
    
   
    if user.role == 3 :  # Définir le rôle du modérateur
     return users.create_user(db,user)
    else :  raise HTTPException(status_code=403, detail="role for moderators is 3")
@rau.delete("/users/delete_moderator/{email}", response_model=schemas.UserOut, response_model_exclude_none=True)
async def delete_moderator(
    email: str,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(get_current_active_admin),
):
    """
    Delete a moderator (role=3) by email
    """
    if current_user.role != 1:
        raise HTTPException(status_code=403, detail="Only admin can delete moderators")
    
    moderator = get_user_by_email(db, email)
    if not moderator or moderator.role != 3:
        raise HTTPException(status_code=400, detail="User is not a moderator or not found")
    
    return users.delete_user(db, moderator.id)

@rau.get("/users/moderators/{user_id}", response_model=List[schemas.UserOut], response_model_exclude_none=True)
async def get_moderators(
    response: Response,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(get_current_active_admin),
):
    """
    Get all moderators (role=3)
    """
    if current_user.role != 1:  # Vérifier que l'utilisateur est un administrateur
        raise HTTPException(status_code=403, detail="Only admin can get moderators")
    
    moderators = get_role_users(db,3)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(moderators)}"
    return moderators
@rau.put("/users/edit_moderator/{email}", response_model=schemas.UserOut, response_model_exclude_none=True)
async def edit_moderator(
    email: str,
    user: schemas.UserEdit,
    db: Session = Depends(database.get_db),
    current_user: schemas.UserOut = Depends(get_current_active_admin),
):
    """
    Edit a moderator (role=3)
    """
    if current_user.role != 1:  # Check if the current user is an admin
        raise HTTPException(status_code=403, detail="Only admin can edit moderators")

    moderator = get_user_by_email(db, email)
    if not moderator or moderator.role != 3:
        raise HTTPException(status_code=404, detail="Moderator not found")

    # Update all fields from the user input
    for key, value in user.dict(exclude_unset=True).items():
        setattr(moderator, key, value)

    # If a new password is provided, update the hashed password
    if user.password:
        moderator.hashed_password = get_password_hash(user.password)

    db.commit()
    db.refresh(moderator)
    return moderator

 
