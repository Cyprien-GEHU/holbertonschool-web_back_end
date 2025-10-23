#!/usr/bin/env python3
"""
Basic authentification system
"""
import base64
from api.v1.auth.auth import Auth
from typing import TypeVar
from models.user import User


class BasicAuth(Auth):
    """Basic authentification with Auth"""
    def extract_base64_authorization_header(
            self, authorization_header: str) -> str:
        """basic auth base64 authorization"""
        if authorization_header is None:
            return None
        if type(authorization_header) is not str:
            return None
        if not authorization_header.startswith("Basic "):
            return None
        else:
            return "".join(authorization_header.split(" ")[1:])

    def decode_base64_authorization_header(
            self, base64_authorization_header: str) -> str:
        """decode the base64"""
        if base64_authorization_header is None:
            return None
        if type(base64_authorization_header) is not str:
            return None
        try:
            encode = base64_authorization_header.encode('utf-8')
            base = base64.b64decode(encode)
            return base.decode('utf-8')
        except Exception:
            return None

    def extract_user_credentials(
            self, decoded_base64_authorization_header: str) -> (str, str):
        """ extract user credentials function"""
        if decoded_base64_authorization_header is None:
            return (None, None)
        if type(decoded_base64_authorization_header) is not str:
            return (None, None)
        if ":" not in decoded_base64_authorization_header:
            return (None, None)
        mail = decoded_base64_authorization_header.split(':')[0]
        password = decoded_base64_authorization_header.split(":")[1]
        return (mail, password)

    def user_object_from_credentials(
                self, user_email: str, user_pwd: str) -> TypeVar('User'):
        """User object function"""
        if user_email is None or type(user_email) is not str:
            return None
        if user_pwd is None or type(user_pwd) is not str:
            return None
        User.load_from_file()
        currentUser = User.search({"email": user_email})
        for user in currentUser:
            if user and user.is_valid_password(user_pwd):
                return user
        return None
