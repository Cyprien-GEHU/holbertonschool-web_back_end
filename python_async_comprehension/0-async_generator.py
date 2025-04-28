#!/usr/bin/env python3
"""the function async generator"""
from typing import Generator
import asyncio
import random


async def async_generator() -> Generator[float, None, None]:
    """the function"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
