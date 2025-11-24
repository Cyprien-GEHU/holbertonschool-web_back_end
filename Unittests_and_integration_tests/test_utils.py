#!/usr/bin/env python3
"""unit test program"""

import unittest
from parameterized import parameterized
from unittest.mock import Mock
from utils import access_nested_map, memoize, get_json


class TestAccessNestedMap(unittest.TestCase):
    """ Nested mapd test """
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2)
    ])
    def test_access_nested_map(self, nested_map, path, result):
        """ test acces nested map function"""
        self.assertEqual(access_nested_map(nested_map, path), result)
