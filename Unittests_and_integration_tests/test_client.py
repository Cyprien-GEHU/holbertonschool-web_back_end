#!/usr/bin/env python3
"""client test program"""

import unittest
from parameterized import parameterized
from unittest.mock import Mock, patch
from client import GithubOrgClient


class TestGithubOrgClient(unittest.TestCase):
    """ clase test github org Client"""
    @parameterized.expand([
        ("google"), ("abc")
    ])
    @patch("client.get_json")
    def test_org(self, data_org, mock):
        """test org function"""
        url = "https://api.github.com/orgs/{}".format(data_org)
        call = GithubOrgClient(data_org)
        call.org()
        mock.assert_called_once_with(url)
