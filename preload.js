const { contextBridge, ipcRenderer } = require("electron");

console.log("Preload script loading...");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("electronAPI", {
  // Window controls
  minimize: () => {
    console.log("minimize called from renderer");
    return ipcRenderer.invoke("window-minimize");
  },
  close: () => {
    console.log("close called from renderer");
    return ipcRenderer.invoke("window-close");
  },
  toggleAlwaysOnTop: () => {
    console.log("toggleAlwaysOnTop called from renderer");
    return ipcRenderer.invoke("window-toggle-top");
  },
  getWindowState: () => {
    console.log("getWindowState called from renderer");
    return ipcRenderer.invoke("get-window-state");
  },

  // Listeners
  onUpdateStatus: (callback) => {
    console.log("onUpdateStatus registered");
    ipcRenderer.on("update-status", (event, data) => callback(data));
  },
});

console.log("Preload script loaded successfully");
