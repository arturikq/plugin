import unittest
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "tests")))


loader = unittest.TestLoader()
suite = loader.discover("tests") 


runner = unittest.TextTestRunner(verbosity=2)
runner.run(suite)
