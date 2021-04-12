const py = require('electron')
var pyshell = require('python-shell')

function api() {
  console.log("script.js")
  pyshell.PythonShell.run('main.py', null, function (err, results) {
    if (err) err
    console.log('main.py done')
    results = results.toString()
    console.log('results', results)
  })
}
