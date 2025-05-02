#!/usr/bin/env python3
"""programme will list all document in collection"""

from pymongo import MongoClient


def list_all(mongo_collection):
    """The function"""
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
