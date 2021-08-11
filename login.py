from personalcapital import PersonalCapital, TwoFactorVerificationModeEnum
import time
import json
import logging
import sys # for input from javascript

class PewCapital(PersonalCapital):
    """
    Extends PersonalCapital to save and load session
    So that it doesn't require 2-factor auth every time
    """
    def __init__(self):
        PersonalCapital.__init__(self)
        self.__session_file = 'session.json'

    def load_session(self):
        try:
            with open(self.__session_file) as data_file:
                cookies = {}
                try:
                    cookies = json.load(data_file)
                except ValueError as err:
                    logging.error(err)
                self.set_session(cookies)
        except IOError as err:
            logging.error(err)

    def save_session(self):
        with open(self.__session_file, 'w') as data_file:
            data_file.write(json.dumps(self.get_session()))

email = sys.argv[1] # Takes first argument
password = sys.argv[2] # Takes second argument

pc = PewCapital()
pc.load_session() # load session from json

try:
    emailfile = open("email.txt", "w") # Hello, this is not correct
    emailfile.write(email)
except:
    print("Creating email file failed")
else:
    print("Creating email file succeded")

try:
    passwordfile = open("password.txt", "w")
    passwordfile.write(password)
except:
    print("Creating password file failed")
else:
    print("Creating password file succeded")

try:
    pc.login(email, password)
except:
    pc.two_factor_challenge(TwoFactorVerificationModeEnum.SMS)
