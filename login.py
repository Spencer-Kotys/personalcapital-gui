from personalcapital import PersonalCapital
import time
import json
import sys # for input from javascript

pc = PersonalCapital()

email = sys.argv[1] # Takes first argument
password = sys.argv[2] # Takes second argument

try:
    pc.login(email, password)
except:
    print("TwoFactorRequired")
else:
    accounts_response = pc.fetch('/newaccount/getAccounts')
    try:
        accounts = accounts_response.json()['spData']
    except:
        print("Login Failed")
    else:
        print("Login Succeeded")
