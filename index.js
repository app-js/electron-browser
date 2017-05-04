const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

var mainWindow = null

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function () {
  var fr = true;
  if (process.platform == 'darwin') fr = false;

  mainWindow = new BrowserWindow({ width: 1030, height: 720, fr })

  var p = url.format({
            pathname: path.join(__dirname, 'browser.html'),
            protocol: 'file:',
            slashes: true
          })

  mainWindow.loadURL(p)

  mainWindow.on('closed', function() {
    mainWindow = null
  })
})
