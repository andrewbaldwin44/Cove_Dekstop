const { app, BrowserView, BrowserWindow } = require('electron');

const PRODUCTION = process.env.PRODUCTION === 'true';
const PORT = process.env.PORT || 3000;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  // const view = new BrowserView();
  // win.setBrowserView(view);
  // view.setBounds({ x: 0, y: 0, width: 300, height: 300 });
  // view.webContents.loadURL("https://electronjs.org");
  console.log({ PRODUCTION, PORT });
  if (PRODUCTION) {
    win.loadFile('index.html');
  } else {
    win.loadURL(`http://localhost:${PORT}/index.html`);
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
