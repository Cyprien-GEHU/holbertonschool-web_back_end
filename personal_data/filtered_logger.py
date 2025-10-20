#!/usr/bin/env python3
"""
the programme return the log message
"""

import re
from typing import List


def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """the function to return the log message"""
    for field in fields:
        pat = rf"{field}=.*?(?={separator})|$"
        message = re.sub(pat, f'{field}={redaction}', message)
    return message
