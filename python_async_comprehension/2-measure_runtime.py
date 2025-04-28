#!/usr/bin/env python3
"""the function messuring the total time"""
import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() ->  float:
    """function will return total time of paraellel comprehensions"""
    firstTime = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    lastTime = time.time()
    totalTime = lastTime - firstTime
    return totalTime
