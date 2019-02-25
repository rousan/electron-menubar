import path from 'path';
import url from 'url';
import { app } from 'electron';
import is from 'electron-is';
import menubar from 'menubar';

let mb;

app.on('ready', () => {
  mb = menubar({
    index: is.dev() ? 'http://localhost:8888/app.html' : url.format({
      pathname: path.join(__dirname, 'app.html'),
      protocol: 'file:',
      slashes: true,
    }),
    icon: path.resolve(__dirname, 'IconTemplate.png'),
    tooltip: 'MyApp',
    width: 350,
    height: 460,
    fullscreenable: false,
    resizable: false,
    transparent: true,
    webPreferences: {
      backgroundThrottling: false,
    },
    alwaysOnTop: true,
    showOnAllWorkspaces: false,
    // preloadWindow: true,
  });

  mb.on('after-create-window', () => {
    mb.window.webContents.openDevTools({ mode: 'undocked' });
  });
});

app.on('window-all-closed', (event) => {
  app.dock.hide();
  event.preventDefault();
});
