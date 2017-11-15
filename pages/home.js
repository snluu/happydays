'use strict';

const electron = require('electron');
const path = require('path');
const url = require('url');

const {BrowserWindow} = electron;

module.exports = class MainPage {
    constructor() {
        this.window = new BrowserWindow();
    }

    load() {
        this.window.loadURL(url.format({
            pathname: path.join(__dirname, 'home.html'),
            protocol: 'file:',
            slashes:true
        }));
    }
}