#!/usr/bin/env python3
"""
authentication system
"""
from flask import request
import os
from typing import List, TypeVar


class Auth():
    """class authentication"""
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """required authentication function"""
        if path is None:
            return True
        if excluded_paths is None:
            return True
        path = path + '/' if path[-1] != '/' else path
        if path in excluded_paths:
            return False
        return True

    def authorization_header(self, request=None) -> str:
        """authorization header function"""
        if request is None:
            return None
        if 'Authorization' not in request.headers:
            return None
        return request.headers['Authorization']

    def current_user(self, request=None) -> TypeVar('User'):
        """the current user function"""
        return None

    def session_cookie(self, request=None):
        """ get session cookie from the request"""
        if request is None:
            return None

        session_name = os.getenv('SESSION_NAME')
        return request.cookies.get(session_name)
