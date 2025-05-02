#!/usr/bin/env python3
"""programme will insert a new document in collection based on kwargs"""

from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """The function"""
    insert = mongo_collection.insert_one(kwargs)
    return insert.inserted_id
