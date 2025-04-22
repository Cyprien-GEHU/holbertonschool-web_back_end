#!/usr/bin/env python3
"""
the function async wait_n will take 2 arguments:
- n the number we use the function wait_random
- max_delay the function for the delay
"""
from typing import List
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """the function asynchronus"""
    delay = [wait_random(max_delay) for _ in range(n)]
    delays = await asyncio.gather(*delay)
    return sorted(delays)
