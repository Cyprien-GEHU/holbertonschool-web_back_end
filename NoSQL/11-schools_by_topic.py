#!/usr/bin/env python3
"""programme will return all list of school having a specific topic"""

from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    """The function"""
    return list(mongo_collection.find(topic))
