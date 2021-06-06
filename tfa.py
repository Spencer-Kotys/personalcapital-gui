from personalcapital import PersonalCapital, RequireTwoFactorException, TwoFactorVerificationModeEnum
import time
import json
import logging

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


pc = PewCapital()
pc.load_session() # load session from json

email = sys.argv[1] # Takes first argument
password = sys.argv[2] # Takes second argument
code = sys.argv[3] # Takes third argument

email = emailFile.read() # read email from email file
password = passwordFile.read() # read password from password file

try:
    pc.login(email, password)
except RequireTwoFactorException:
    pc.two_factor_challenge(TwoFactorVerificationModeEnum.SMS)
    pc.two_factor_authenticate(TwoFactorVerificationModeEnum.SMS, code)
    pc.authenticate_password(password)

accounts_response = pc.fetch('/newaccount/getAccounts')
accounts = accounts_response.json()['spData']

print('Networth ${0}'.format(accounts['networth']))
print('Assets ${0}'.format(accounts['assets']))
print('Liabilities ${0}'.format(accounts['liabilities']))
print('Investments ${0}'.format(accounts['investmentAccountsTotal']))

pc.save_session() # save session to json
