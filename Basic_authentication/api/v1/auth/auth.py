#!/usr/bin/env python3
"""
authentication system
"""
from flask import request
from typing import List, TypeVar


class Auth():
    """class authentication"""
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """required authentication function"""
        return False

    def authorization_header(self, request=None) -> str:
        """authorization header function"""
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """the current user function"""
        return None
