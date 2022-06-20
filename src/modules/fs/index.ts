import * as fs from 'fs';
import axios from 'axios';

const getImageUri = (uri: string) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.src = uri;
  img.crossOrigin = 'Anonymous';
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);
  };
  return canvas.toDataURL('image/png');
};

export const getFileList = (srcList: string[]) : void => {
  const result = srcList.map((src) => getImageUri(src));
  console.log(result);
};
