#!/usr/bin/env python3
"""
Redis exercise file
"""
import redis
import uuid
from typing import Union


redis_data = Union[int, str, bytes, float]


class Cache():
    """class cache for the memory"""
    def __init__(self):
        """ instance of the class """
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: redis_data) -> str:
        """ the method generate a random key """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key
