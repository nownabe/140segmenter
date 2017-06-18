/*
import * as Electron from "electron";

const electron = require("electron");
const app: Electron.App = electron.app;
const BrowserWindow: typeof Electron.BrowserWindow = electron.BrowserWindow;


let win: Electron.BrowserWindow | null;

const createWindow = () => {
    win = new BrowserWindow({ width: 800, height: 600});
    win.loadURL(`file://${__dirname}/index.html`);

    win.webContents.openDevTools();

    win.on("closed", () => {
        win = null;
    });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
});

app.on("activate", () => {
    if (win === null) {
        createWindow();
    }
});
*/