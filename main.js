'use strict';

const electron = require('electron');
const { app, BrowserWindow } = electron;

const menu = require('./menu.js');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', function(){
    mainWindow = null;
  });

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools();
    require('vue-devtools').install();
  }

  mainWindow.maximize();

  menu.install();
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function(){
  if (mainWindow === null) {
    createWindow();
  }
});
