#!/usr/bin/env python3
""" lifo cache dictionary task"""

from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """ the FIFO Caching programme """

    def __init__(self):
        """fonction init"""
        super().__init__()
        self.order_item = []

    def put(self, key, item):
        """
        put key value ot the cache
        apply lifo (last in first out) cache
        if the key is None or item is None we return
        """
        if key is None or item is None:
            return

        if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
            if key not in self.cache_data:
                discard = self.order_item.pop(-1)
                del self.cache_data[discard]
                print(f'DISCARD: {discard}')

        self.cache_data[key] = item
        self.order_item.append(key)

    def get(self, key):
        """
        get value of the cache
        if the key is None None we return None
        """
        if key is None:
            return None
        return self.cache_data.get(key, None)
