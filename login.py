import sys # for input from javascript

email = sys.argv[1] # Takes first argument
password = sys.argv[2] # Takes second argument

try:
    emailfile = open("email.txt", "w")
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
