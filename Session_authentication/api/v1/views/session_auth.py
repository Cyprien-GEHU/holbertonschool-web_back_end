#!/usr/bin/env python3
""" Module of Index views
"""
from flask import jsonify, abort, request
from api.v1.views import app_views
from api.v1.app import auth
import os
from models.user import User


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login():
    """ POST /api/v1//auth_session/login
    Return:
      - Error or the user
    """

    email = request.form.get("email")
    password = request.form.get("password")

    if not email:
        return jsonify({"error": "email missing"}), 400
    if not password:
        return jsonify({"error": "password missing"}), 400

    users = User.search({"email": email})

    if not users:
        return jsonify({"error": "no user found for this email"}), 404

    for user in users:
        if not user.is_valid_password(password):
            return jsonify({"error": "wrong password"}), 401

        from api.v1.app import auth
        session_id = auth.create_session(user.id)
        session_name = os.getenv("SESSION_NAME")
        cur_user = jsonify(user.to_json())
        cur_user.set_cookie(session_name, session_id)
        return cur_user


@app_views.route('/api/v1/auth_session/logout', methods=['POST'],
                 strict_slashes=False)
def logout():
    """logout system"""

    logout = auth.destroy_session(request)

    if not logout:
        abort(404)
    return jsonify({}), 200
