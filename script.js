const py = require('electron')
var pyshell = require('python-shell')

function check(file) {
  const fs = require('fs')
  if(fs.existsSync(file)) {
    return true
  } else {
    return false
  }
}

function start() {
  if (check("session.json")) {
    console.log("Yes")
    window.location.href = 'info.html' //changes window to info if session already exists
  }
  else {
    console.log("No")
  }
}

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
  document.getElementById("emaildiv").setAttribute("class", "d-none") // makes email invisible
  document.getElementById("passdiv").setAttribute("class", "d-none") // makes password invisible
  document.getElementById("twodiv").setAttribute("class", "d-block") // makes two factor authentication visible
  document.getElementById("button1").setAttribute("class", "d-none") // makes first button invisible
  document.getElementById("button2").setAttribute("class", "btn btn-primary") // makes second button visible
}

function tfa() {
  var code = document.getElementById("twofac").value
  console.log(code)
  let options = {
    args: [code]
  }
  pyshell.PythonShell.run('tfa.py', options, function (err, results) {
    if (err) err
    console.log('results', results)
  })
}
