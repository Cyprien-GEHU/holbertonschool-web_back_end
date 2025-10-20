#!/usr/bin/env python3
"""
the programme return the log message
"""

import re
from typing import List
import logging

PII_FIELDS = ("name", "email", "phone", "ssn", "password")


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
        """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"

    def __init__(self, fields: List[str]):
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.fields = fields

    def format(self, record: logging.LogRecord) -> str:
        """we send all value form the log record to filter_datum"""
        return filter_datum(self.fields, self.REDACTION,
                            super().format(record), self.SEPARATOR)


def filter_datum(fields: List[str], redaction: str, message: str,
                 separator: str) -> str:
    """the function to return the log message"""
    for field in fields:
        message = re.sub(f"{field}=(.*?){separator}",
                         f'{field}={redaction}{separator}', message)
    return message


def get_logger() -> logging.Logger:
    """create a logger"""
    logger = logging.getLogger("user_data")
    logger.setLevel(logging.INFO)
    logger.propagate = False

    SH = logging.StreamHandler()
    SH.setFormatter(RedactingFormatter(PII_FIELDS))
    logger.addHandler(SH)

    return logger
