'use strict';

const electron = require('electron');
const { dialog, Menu, MenuItem } = electron;

function OpenRegistryCommand(menuItem, browserWindow, event) {
  const options = {
    properties: ['openFile'],
    filters: [
      {name: 'Blueprints', extensions: ['db']},
    ]
  };

  dialog.showOpenDialog(options, function (files) {
    if (files) {
      for (var i = 0; i < files.length; i++) {
        browserWindow.webContents.send('open-registry', files[i]);
      }
    }
  });
}

function CloseAllCommand(menuItem, browserWindow, event) {
  browserWindow.webContents.send('close-all');
}

const fileMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open Blueprint...',
        click: OpenRegistryCommand
      },
      {
        label: 'Close All',
        click: CloseAllCommand
      }
    ]
  }
];

module.exports = {
  install: function() {
    var fileMenu = Menu.buildFromTemplate(fileMenuTemplate);
    var mainMenu = Menu.getApplicationMenu();

    mainMenu.insert(1, fileMenu.items[0]);
    Menu.setApplicationMenu(mainMenu);
  }
};
