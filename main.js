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
  window.webContents.openDevTools() // open DevTools automatically
  window.loadFile('login.html')
}

app.on('ready', createWindow)
