#!/usr/bin/env python3
"""programme provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient


def log_stats():
    """The function"""
    client = MongoClient('localhost', 27017)
    db = client.logs
    collection = db.nginx

    num_logs = collection.count_documents({})
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    status_check = collection.count_documents(
        {
            "method": "GET",
            "path": "/status"
        })

    print(f"{num_logs} logs")
    print("Methods:")
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
