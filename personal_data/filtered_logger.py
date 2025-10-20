#!/usr/bin/env python3
"""
the programme return the log message
"""

import re


def filter_datum(fields, redaction, message, separator):
    """the function to return the log message"""
    for field in fields:
        pat = rf"{field}=.*?(?={separator})|$"
        message = re.sub(pat, f'{field}={redaction}', message)
    return message
