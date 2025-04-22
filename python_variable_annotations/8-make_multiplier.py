#!/usr/bin/env python3
"""
the function will take float multiplier
and return the function mutiplies a float by multiplier
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """the function return the result of the function mul_function"""
    def mul_function(val: float) -> float:
        """function multiplie value by multiplier"""
        return multiplier * val
    return mul_function
