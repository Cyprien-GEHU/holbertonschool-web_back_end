#!/usr/bin/env python3
"""the function async generator"""
async_generator = __import__('0-async_generator').async_generator
from typing import List


async def async_generator() -> List[float]:
    """the function"""
    return [i async for i in async_generator()]
