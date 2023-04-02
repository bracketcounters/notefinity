const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const windowStateKeeper = require("electron-window-state")
const { DataStorage, FileStorage } = require("./src/storage");
const { Modal } = require("./src/modal");
const fs = require("fs");
const path = require("path");

let win;
function createWindow() {
    let windowState = windowStateKeeper({
        defaultWidth: 800,
        defaultHeight: 600
    });
    win = new BrowserWindow({
        width: windowState.width,
        height: windowState.height,
        x: windowState.x,
        y: windowState.y,
        autoHideMenuBar: true,
        icon: "assets/icons/notefinity.png",
        frame: false,
        minWidth: 312,
        minHeight: 120,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })
    win.loadFile("src/pages/index.html");
    // win.webContents.openDevTools();
    windowState.manage(win);
    ipcMain.on("appAction", (event, data)=>{
        if (data == "maximize") {
            if (win.isMaximized()) {
                win.restore();
            }
            else {
                win.maximize();
            }
        }
        else if (data == "minimize") {
            win.minimize();
        }
        else if (data == "exit") {
            app.quit();
        }
    })
}

function randomString(length) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function extensionOf(filename) {
    const parts = filename.split('.');
    if (parts.length === 1) {
      return '';
    }
    return parts.pop();
  }
  

ipcMain.on("open-modal", (event, data)=>{
    switch (data) {
        case "frame":
            let modalFrame = new Modal(400, 300, win, "src/pages/customizations/frame.html", false);
            modalFrame.open();
            break;

        case "theme":
            let modalTheme = new Modal(500, 300, win, "src/pages/customizations/theme.html", false);
            modalTheme.open();
            break;
    
        case "textbox":
            let modalTextbox = new Modal(400, 550, win, "src/pages/customizations/textbox.html", false);
            modalTextbox.open();

        default:
            break;
    }
})

ipcMain.on("check-customization-frame", (event, data)=>{
    win.webContents.send("check-customization-frame-check", true);
})

ipcMain.on("check-theme", (event, data)=>{
    win.webContents.send("check-theme-check", true);
})

ipcMain.on("check-textbox-theme", (event, data)=>{
    win.webContents.send("check-textbox-theme-check", true);
})

ipcMain.on("add-textbox-image-action", (event, data)=>{
    dialog.showOpenDialog({
        properties: ['openFile', 'multiSelections'],
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'avif'] }
          ]
    }).then(result=>{
        if (!result.canceled) {
            let filePaths = result.filePaths;
            filePaths.forEach(filepath => {
                try {
                    let storage1 = new DataStorage("bg-images", randomString(16) + "." + extensionOf(filepath));
                    let storage2 = new FileStorage(filepath);
                    storage1.setData(storage2.getBinaryData());
                    event.reply("back-textbox-image-action", true);
                }
                catch(err) {
                }
            });
        }
    }).catch(err=>{

    })
})

ipcMain.on("refresh-textbox-images", (event, data)=>{
    let storage = new DataStorage("bg-images", "");
    try {
        let files = fs.readdirSync(storage.subfolder);
        let returnableFiles = [];
        files.forEach(file=>{
            if (["png", "jpg", "avif"].includes(extensionOf(file))) {
                returnableFiles.push(path.join(storage.subfolder, file));
            }
        })
        event.reply("back-refresh-textbox-images", returnableFiles);
    }
    catch(err) {

    }
})

ipcMain.on("delete-textbox-image", (event, data)=>{
    let image = data.toString();
    let imageFile = image.split("/")
    let imagePath = imageFile[imageFile.length-1];
    try {
        let imageStorage = new DataStorage("bg-images", imagePath);
        imageStorage.delete();
        event.reply("delete-textbox-image-done", true);
    }
    catch(err) {
    }

})

app.on("ready", ()=>{
    createWindow();
    let modalTextbox = new Modal(400, 550, win, "src/pages/customizations/textbox.html", false);
    modalTextbox.open();
})

