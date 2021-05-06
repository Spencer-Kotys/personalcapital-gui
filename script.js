const py = require('electron')
var pyshell = require('python-shell')

function api() {
  console.log("script.js")
  document.getElementById("net").innerHTML = "Net Worth $0"
  document.getElementById("assets").innerHTML = "Assets $0"
  document.getElementById("liabilities").innerHTML = "Liabilities $0"
  document.getElementById("investments").innerHTML = "Investments $0"
  pyshell.PythonShell.run('main.py', null, function (err, results) {
    if (err) err
    console.log('main.py done')
    console.log('results', results) // print out list of results
    document.getElementById("net").innerHTML = results[0]
    document.getElementById("assets").innerHTML = results[1]
    document.getElementById("liabilities").innerHTML = results[2]
    document.getElementById("investments").innerHTML = results[3]
  })
}

function login() {
  var email = document.getElementById("email").value
  console.log(email)
  var password = document.getElementById("password").value
  console.log(password)
  let options = {
    args: [email, password]
  }
  pyshell.PythonShell.run('login.py', options, function (err, results) {
    if (err) err
    console.log('results', results)
  })
}
