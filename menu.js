'use strict';

const electron = require('electron');
const { dialog, Menu, MenuItem } = electron;

const config = require('./config.js');

function OpenBlueprint(menuItem, browserWindow, event) {
  const options = {
    properties: ['openFile'],
    filters: [
      {name: 'Blueprints', extensions: ['db']},
    ]
  };

  dialog.showOpenDialog(options, function (files) {
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      browserWindow.webContents.send('open-blueprint', { file: file });
      config.addBlueprint(file);
    }
  });
}

const fileMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open Blueprint...',
        click: OpenBlueprint
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
