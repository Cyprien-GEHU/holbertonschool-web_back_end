#!/usr/bin/env python3
"""
the function will take the string k and the int/float v
and return the result into tuple with:
- the first element k (string)
- the square of the int or float v (into float)
"""
from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """the function sum all mix element of the list"""
    return (k, float(v ** 2))
