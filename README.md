# personalcapital-gui
This is a repo for a GUI application built with Electron that uses a python library built by [haochi](https://github.com/haochi) to access the Personal Capital API.
The end goal is to be able to run the service as an Electron app to allow for quick updates without the need to log into the site.

[Personal Capital Repo](https://github.com/haochi/personalcapital)

[Electron](https://github.com/electron/electron)

[Personal Capital Website](https://www.personalcapital.com/)

## Usage Instructions

1. Clone repo

2. Install npm, node, python3, and pip

3. Install requests and personalcapital with `pip install requests` and  `pip install personalcapital`

4. Install electron with `npm i --save-dev electron`

5. Type `npm start`

6. Enter your username and password and click login

7. Enter the two factor code from your phone and click submit two factor code

8. You should now be logged in and your credentials should be stored.

9. Future logins should not require reentering username, password, or tfa code.
