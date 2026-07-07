const {
  app,
  BrowserWindow,
  Tray,
  Menu,
  screen,
  nativeImage,
  ipcMain,
} = require("electron");
const path = require("path");
const fs = require("fs");

let mainWindow = null;
let tray = null;
let isQuitting = false;

// Create the window
function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: 420,
    height: 700,
    minWidth: 320,
    minHeight: 500,
    maxWidth: 600,
    maxHeight: 900,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: false,
    resizable: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    icon: path.join(__dirname, "assets", "icon.png"),
  });

  // Load the app
  mainWindow.loadFile("index.html");

  // Set window position (top-right corner)
  mainWindow.setPosition(width - 440, 40);

  // Handle window close
  mainWindow.on("close", (event) => {
    if (!isQuitting) {
      event.preventDefault();
      mainWindow.hide();
    }
    return false;
  });

  // Open DevTools in development
  if (process.env.NODE_ENV === "development") {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  return mainWindow;
}

// Create system tray
function createTray() {
  const iconPath = path.join(__dirname, "assets", "tray-icon.png");
  let trayIcon;

  try {
    if (fs.existsSync(iconPath)) {
      trayIcon = nativeImage.createFromPath(iconPath);
    } else {
      // Fallback: create a simple icon from text
      trayIcon = nativeImage.createEmpty();
    }
  } catch (error) {
    trayIcon = nativeImage.createEmpty();
  }

  tray = new Tray(trayIcon);

  const contextMenu = Menu.buildFromTemplate([
    {
      label: "Show Widget",
      click: () => {
        if (mainWindow) {
          mainWindow.show();
          mainWindow.focus();
        } else {
          createWindow();
        }
      },
    },
    {
      label: "Toggle Always on Top",
      click: () => {
        if (mainWindow) {
          const isOnTop = mainWindow.isAlwaysOnTop();
          mainWindow.setAlwaysOnTop(!isOnTop);
          mainWindow.webContents.send("update-status", {
            type: "always-on-top",
            value: !isOnTop,
          });
        }
      },
    },
    { type: "separator" },
    {
      label: "Quit",
      click: () => {
        isQuitting = true;
        app.quit();
      },
    },
  ]);

  tray.setToolTip("World Clock Widget");
  tray.setContextMenu(contextMenu);

  tray.on("click", () => {
    if (mainWindow) {
      if (mainWindow.isVisible()) {
        mainWindow.hide();
      } else {
        mainWindow.show();
        mainWindow.focus();
      }
    } else {
      createWindow();
    }
  });

  return tray;
}

// IPC handlers
ipcMain.handle("window-minimize", () => {
  console.log("IPC: minimize called");
  if (mainWindow) {
    mainWindow.minimize();
    return true;
  }
  return false;
});

ipcMain.handle("window-close", () => {
  console.log("IPC: close called");
  if (mainWindow) {
    mainWindow.hide();
    return true;
  }
  return false;
});

ipcMain.handle("window-toggle-top", () => {
  console.log("IPC: toggle always on top called");
  if (mainWindow) {
    const isOnTop = mainWindow.isAlwaysOnTop();
    mainWindow.setAlwaysOnTop(!isOnTop);
    return !isOnTop;
  }
  return false;
});

ipcMain.handle("get-window-state", () => {
  console.log("IPC: get window state called");
  if (mainWindow) {
    return {
      isAlwaysOnTop: mainWindow.isAlwaysOnTop(),
    };
  }
  return { isAlwaysOnTop: true };
});

// App lifecycle
app.whenReady().then(() => {
  createWindow();
  createTray();

  // On macOS, re-create window when dock icon is clicked
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    } else if (mainWindow) {
      mainWindow.show();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  isQuitting = true;
});

// Keyboard shortcuts
app.on("ready", () => {
  globalShortcut = require("electron").globalShortcut;
  globalShortcut.register("CommandOrControl+Shift+W", () => {
    if (mainWindow) {
      if (mainWindow.isVisible()) {
        mainWindow.hide();
      } else {
        mainWindow.show();
        mainWindow.focus();
      }
    }
  });
});

app.on("will-quit", () => {
  if (globalShortcut) {
    globalShortcut.unregisterAll();
  }
});
