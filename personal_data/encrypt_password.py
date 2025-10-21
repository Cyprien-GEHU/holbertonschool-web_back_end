#!/usr/bin/env python3
""" files encrypt and check the password """

import bcrypt


def hash_password(password: str) -> bytes:
    """ function to encrypt the password """
    dataBytes = password.encode('utf-8')
    return bcrypt.hashpw(dataBytes, bcrypt.gensalt())
