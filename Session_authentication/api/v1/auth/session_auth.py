#!/usr/bin/env python3
"""
session authentication system
"""
import base64
from api.v1.auth.auth import Auth
from typing import TypeVar
from models.user import User


class SessionAuth(Auth):
    """class sessionAuth"""
