#!/usr/bin/env python3
""" Basic dictionary task"""

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """ the basic Caching programme """

    def put(self, key, item):
        """
        put key value ot the cache
        if the key is None or item is None we return None
        """
        if key is None or item is None:
            return None
        self.cache_data[key] = item

    def get(self, key):
        """
        get value of the cache
        if the key is None None we return None
        """
        if key is None:
            return None
        return self.cache_data.get(key, None)
