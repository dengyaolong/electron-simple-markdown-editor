const {app, BrowserWindow} = require('electron')

let mainWindow
function createWindow(){
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);
}

app.on('ready', createWindow);
