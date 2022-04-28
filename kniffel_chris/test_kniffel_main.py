from io import StringIO
from unittest import TestCase
from unittest.mock import patch
import kniffel_main

#class TestURLPrint(TestCase):

    #fehler bei stdin: eof read line
    #def test_main(self):
    #    @mock.patch('table_handling.winner', return_value=1) #sagt def, dass func main 1 returnt
    #    with patch('sys.stdout', new = StringIO()):
    #        with patch('sys.stdin', new = StringIO('j\n0\n5')):
    #            self.assertRaises(Exception, kniffel_main.main())
    #@patch("kniffel_main.input", create=True)

    #fehler bei stdin: eof read line
    #def test_main(self, mocked_input):
    #    mocked_input.side_effect = ['j']
    #    self.assertRaises(Exception, kniffel_main.main())