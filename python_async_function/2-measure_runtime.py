#!/usr/bin/env python3
"""
the function async wait_n will take 2 arguments:
- n the number we use the function wait_random
- max_delay the function for the delay
and return the total time of execution (float)
"""
import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    """the function asynchronus"""
    first_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    last_time = time.time()
    total_time = last_time - first_time
    return total_time / n
