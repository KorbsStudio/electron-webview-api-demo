const {app, BrowserWindow} = require('electron')

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1500,
    height: 900,
    autoHideMenuBar: true,
    webPreferences: {
      webviewTag: true // Required for any webview to be loaded
    }
  })
  mainWindow.loadFile('index.html')
}
app.whenReady().then(() => {createWindow()})