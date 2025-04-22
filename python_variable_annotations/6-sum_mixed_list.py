#!/usr/bin/env python3
"""
the function will sum all mix element of the list
and return the result into float
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """the function sum all mix element of the list"""
    return sum(mxd_lst)
