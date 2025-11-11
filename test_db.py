#!/usr/bin/env python
"""
Test script to verify PostgreSQL database connection
"""
import os
import django
from django.conf import settings
from django.db import connection

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'CarDealerPlatform.settings')
django.setup()

def test_database_connection():
    """Test the database connection"""
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            result = cursor.fetchone()
            print("SUCCESS: Database connection successful!")
            print(f"Database backend: {connection.vendor}")
            print(f"Database name: {connection.settings_dict.get('NAME', 'Unknown')}")
            return True
    except Exception as e:
        print(f"FAILED: Database connection failed: {e}")
        return False

if __name__ == "__main__":
    print("Testing database connection...")
    test_database_connection()