#!/usr/bin/env python3
"""
Basic authentification system
"""

import base64
from api.v1.auth.auth import Auth


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
