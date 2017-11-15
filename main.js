const electron = require('electron');
const path = require('path');
const url = require('url');

const {app} = electron;

app.on('ready', function(){
  const HomePage = require('./pages/home.js');
  const homePage = new HomePage();
  
  homePage.window.on('closed', function(){
      app.quit();
  });
  
  homePage.load();
});