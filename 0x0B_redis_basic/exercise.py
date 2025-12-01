#!/usr/bin/env python3
"""
Redis exercise file
"""
import redis
import uuid
from typing import Union, Callable, Optional


redis_data = Union[str, bytes, int, float]


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

    def get(self, key: str, fn: Optional[Callable] = None) -> redis_data:
        """get method """
        data = self._redis.get(key)
        if not fn:
            return data
        else:
            return fn(data)

    def get_str(self, key):
        """get str method"""
        key = self._redis.get(key)
        return key.decode('utf-8')

    def get_int(self, key):
        return self.get(key, int)
