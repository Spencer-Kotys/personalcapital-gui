const py = require('electron')
var pyshell = require('python-shell')

function api() {
  console.log("script.js")
  document.getElementById("net").innerHTML = "Net Worth $1"
  document.getElementById("assets").innerHTML = "Net Worth $1"
  document.getElementById("liabilities").innerHTML = "Net Worth $1"
  document.getElementById("investments").innerHTML = "Net Worth $1"
  pyshell.PythonShell.run('main.py', null, function (err, results) {
    if (err) err
    console.log('main.py done')
    results = results.toString()
    console.log('results', results)
    document.getElementById("net").innerHTML = 'Net Worth ' + results
  })
}
