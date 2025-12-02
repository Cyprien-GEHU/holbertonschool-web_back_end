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


def replay(function: Callable):
    """replay function"""
    R = redis.Redis()
    key_func = function.__qualname__
    input_f = R.lrange("{}:inputs".format(key_func), 0, -1)
    output_f = R.lrange("{}:outputs".format(key_func), 0, -1)
    all_call = len(input_f)
    str_time = 'times'
    if all_call == 1:
        str_time = "time"
    print('{} was called {} {}:'.format(key_func, all_call, str_time))
    for key, value in zip(input_f, output_f):
        print("{}(*{}) -> {}".format(key_func,
                                     key.decode('utf-8'),
                                     value.decode("utf-8")))


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
