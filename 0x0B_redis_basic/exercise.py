#!/usr/bin/env python3
"""
Redis exercise file
"""
import redis
import uuid
from typing import Union, Callable, Optional
from functools import wraps


redis_data = Union[str, bytes, int, float]


def count_calls(method: Callable) -> Callable:
    """ count calls function"""
    @wraps(method)
    def wrapper(self, *args, **kwds):
        key = method.__qualname__
        self._redis.incr(key)
        return method(self, *args, **kwds)
    return wrapper


def call_history(method: Callable) -> Callable:
    """ call history """
    @wraps(method)
    def wrapper(self, *args, **kwds):
        key_input = method.__qualname__ + ":inputs"
        key_output = method.__qualname__ + ":outputs"
        self._redis.rpush(key_input, str(args))
        out = method(self, *args, **kwds)
        self._redis.rpush(key_output, out)
        return out
    return wrapper


def replay(func: Callable):
    """replay function"""
    if not func:
        return None
    con = redis.Redis()
    full_name = func.__qualname__
    count = int(con.get(full_name))
    inputs = con.lrange(
        "{}:inputs".format(full_name), 0, -1
    )
    outputs = con.lrange(
        "{}:outputs".format(full_name), 0, -1
    )
    str_ins = [item.decode('utf-8') for item in inputs]
    str_outs = [item.decode('utf-8') for item in outputs]
    print("Cache.store was called {} times:".format(count))
    for ins, outs in zip(str_ins, str_outs):
        print(
            "Cache.store(*{}) -> {}".format(str(ins), str(outs))
        )


class Cache():
    """class cache for the memory"""
    def __init__(self):
        """ instance of the class """
        self._redis = redis.Redis()
        self._redis.flushdb()

    @count_calls
    @call_history
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
