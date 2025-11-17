#!/usr/bin/env python3
"""authentification system"""
import bcrypt


def _hash_password(password: str) -> bytes:
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())
