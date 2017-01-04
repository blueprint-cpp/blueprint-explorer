'use strict';

const electron = require('electron');
const { app, dialog, Menu, MenuItem } = electron;

function OpenBlueprint(menuItem, browserWindow, event) {
  const options = {
    properties: ['openFile'],
    filters: [
      {name: 'Blueprints', extensions: ['db']},
    ]
  };

  dialog.showOpenDialog(options, function (files) {
    for (var i = 0; i < files.length; i++) {
      browserWindow.webContents.send('open-blueprint', { file: files[i] });
      app.addRecentDocument(files[i]);
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
