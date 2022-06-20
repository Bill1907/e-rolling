import { ipcRenderer } from 'electron';

const singleImageFileDownlaod = (file: string) => {
  ipcRenderer.send('saveImage', file);
};

const zipFileDownload = (buf: string) => {
  ipcRenderer.send('saveZipFile', buf);
};

export { singleImageFileDownlaod, zipFileDownload };
