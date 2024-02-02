"""Add username column

Revision ID: ee361ca735dc
Create Date: 2023-12-29 19:03:03.663250

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'ee361ca735dc'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None

def upgrade():
    # Ajoute la colonne usernameà la table users
    op.add_column('users', sa.Column('username', sa.String(), nullable=True))

def downgrade() -> None:
    pass
