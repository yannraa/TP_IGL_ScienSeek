from fastapi import APIRouter, Depends, Response ,Request
import typing as t
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.db.crud import (
    get_users,
    get_user,
    create_user,
    delete_user,
    edit_user,
)
from app.db.schemas import User, UserOut, UserCreate
from app.authe import get_current_active_admin

users_router = ra = APIRouter()

@ra.get(
    "/users",
    response_model=t.List[UserOut],
    response_model_exclude_none=True,
)
async def users_list(
    response: Response,
    db=Depends(get_db),
    current_user=Depends(get_current_active_admin),
):
    """
    Get all users
    """
    users = get_users(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(users)}"
    return users

@ra.get("/users/me", response_model=UserOut, response_model_exclude_none=True)
async def user_me(current_user=Depends(get_current_active_admin)):
    """
    Get own user
    """
    return current_user

@ra.post("/users", response_model=User, response_model_exclude_none=True)
async def user_create(
    request: Request,
    user: UserCreate,
    db=Depends(get_db),
    current_user=Depends(get_current_active_admin),
):
    """
    Create a new user
    """
    return create_user(db, user)


@ra.get(
    "/users/{user_id}",
    response_model=UserOut,
    response_model_exclude_none=True,
)
async def read_user(
    user_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_admin),
):
    """
    Get any user details
    """
    user = get_user(db, user_id)
    return user
