#!/usr/bin/env python3
"""
Function return the tuple with 2 argument:
page and page_size
"""


def index_range(page: int, page_size: int) -> tuple:
    """the simple helper function"""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
