const {app, BrowserWindow} = require('electron')

function createWindow () {
  window = new BrowserWindow({
    width:800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  window.loadFile('login.html')
}

app.on('ready', createWindow)
