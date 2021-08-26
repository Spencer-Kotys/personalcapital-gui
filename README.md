# personalcapital-gui
This is a repo for a GUI application built with Electron that uses a python library built by [haochi](https://github.com/haochi) to access the Personal Capital API.
The end goal is to be able to run the service as an Electron app to allow for quick updates without the need to login into the site.

[Personal Capital Repo](https://github.com/haochi/personalcapital)

[Electron](https://github.com/electron/electron)

[Personal Capital Website](https://www.personalcapital.com/)

## Usage Instructions

1. Clone repo

2. Install npm, node, python3, and pip

3. Install requests and personalcapital with `pip install requests` and  `pip install personalcapital`

4. Install electron with `npm i --save-dev electron`

5. Create files email.txt and password.txt which contain your personal capital
email and password

6. Type `npm start`

7. Enter your two factor code from your phone into the console

8. Now you should be logged in and should see the numbers update
