#!/usr/bin/env python3
"""unit test program"""

import unittest
from parameterized import parameterized
from unittest.mock import Mock, patch
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

    @parameterized.expand([
        ({}, ("a",)),
        ({"a": 1}, ("a", "b"))
    ])
    def test_access_nested_map_exception(self, nested_map, path):
        """ test access nested map execption"""
        with self.assertRaises(KeyError):
            access_nested_map(nested_map, path)


class TestGetJson(unittest.TestCase):
    """ Test get Json class """
    @parameterized.extend([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False})
    ])
    def test_get_json(self, test_url, test_payload):
        """ test get json function """
        with patch("utils.get_json") as mock_get:
            mock_res = Mock()
            mock_res.json.return_value = test_payload
            mock_get.return_value = mock_res

            result = get_json(test_url)

            mock_get.assert_called_once_with(test_url)
            self.assertEqual(result, test_payload)
