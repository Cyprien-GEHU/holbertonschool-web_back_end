#!/usr/bin/env python3
""" mru cache dictionary task"""

from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """ the MRU Caching programme """

    def __init__(self):
        """fonction init"""
        super().__init__()
        self.order_item = []

    def put(self, key, item):
        """
        put key value ot the cache
        apply MRU (Most Recently Used) cache
        if the key is None or item is None we return
        """
        if key is None or item is None:
            return

        if len(self.cache_data) >= BaseCaching.MAX_ITEMS and \
                key not in self.cache_data:
            discard = self.order_item.pop()
            del self.cache_data[discard]
            print(f'DISCARD: {discard}')

        self.cache_data[key] = item
        if key in self.order_item:
            self.order_item.remove(key)
        self.order_item.append(key)

    def get(self, key):
        """
        get value of the cache
        if the key is None None we return None
        when we use get we change the order of item
        """
        if key is None:
            return None
        result = self.cache_data.get(key, None)
        if result is not None:
            self.order_item.remove(key)
            self.order_item.append(key)
        return (result)
