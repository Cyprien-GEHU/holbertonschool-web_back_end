#!/usr/bin/env python3
"""client test program"""

import unittest
from parameterized import parameterized, parameterized_class
from unittest.mock import Mock, patch, PropertyMock
from client import GithubOrgClient
from fixtures import TEST_PAYLOAD


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

    def test_public_repos_url(self):
        """ test public repos url method"""
        playload = {
            "repos_url": "hhttps://api.github.com/orgs/google/repos"
        }
        with patch('client.GithubOrgClient.org', new_callable=PropertyMock,
                   return_value=playload):
            result = GithubOrgClient("google")
            self.assertEqual(result._public_repos_url, playload["repos_url"])

    @patch("client.get_json")
    def test_public_repos(self, mock):
        """test public repos method"""
        PL = ([
            {"name": "google"}, {"name": "abc"}
        ])
        mock.return_value = PL

        with patch("client.GithubOrgClient._public_repos_url",
                   new_callable=PropertyMock) as mock_property:
            mock_property.return_value = "hello"
            result = GithubOrgClient('test').public_repos()
            self.assertEqual(result, ["google", "abc"])

            mock_property.assert_called_once()
            mock.assert_called_once()

    @parameterized.expand([
        ({"license": {"key": "my_license"}}, "my_license", True),
        ({"license": {"key": "other_license"}}, "my_license", False)
    ])
    def test_has_license(self, license, key, result):
        """ Test has license function """
        org_license = GithubOrgClient.has_license(license, key)
        self.assertEqual(org_license, result)


@parameterized_class([
    ("org_payload"), ("repos_payload"), ("expected_repos"),
    ("apache2_repos")
], TEST_PAYLOAD)
class TestIntegrationGithubOrgClient(unittest.TestCase):
    """ class test intergration git hub org client"""
    @classmethod
    def setUpClass(cls):
        """set up class method"""
        cls.get_patcher = patch('requests.get', side_effect=[
            cls.org_payload, cls.repos_repos_payload])
        cls.mocked_get = cls.get_patcher.start()

    @classmethod
    def tearDownClass(cls):
        """ tear down class method"""
        cls.get_patcher.stop()
