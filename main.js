const electron = require('electron');
const path = require('path');
const url = require('url');

const {app, Menu} = electron;

const MENU_TEMPLATE = [
  {
    label: 'Application',
    submenu: [
      {role: 'quit'},
    ],
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload'},
      { role: 'togglefullscreen' },
      { type: 'separator' },
      { role: 'toggledevtools' },
    ],
  },
]

app.on('ready', function(){
  const HomePage = require('./pages/home.js');
  const homePage = new HomePage();
  
  homePage.window.on('closed', function(){
      app.quit();
  });
  
  homePage.load();

  Menu.setApplicationMenu(Menu.buildFromTemplate(MENU_TEMPLATE));
});