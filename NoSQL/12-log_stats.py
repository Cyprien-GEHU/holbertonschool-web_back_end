#!/usr/bin/env python3
"""programme provides some stats about Nginx logs stored in MongoDB"""

from pymongo import MongoClient


def log_stats():
    """The function"""
    client = MongoClient('mongodb://127.0.0.1:27017')
    logs = client.logs
    nginx = logs.nginx

    num_logs = nginx.count_documents({})
    print(f"{num_logs} logs")

    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        value = nginx.count_documents({"method": method})
        print(f"\tmethod {method}: {value}")

    status_log = nginx.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_log} status check")


if __name__ == "__main__":
    log_stats()
