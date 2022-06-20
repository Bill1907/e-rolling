import AdmZip from 'adm-zip';

const getImageUri = (uri: string): string => {
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

const zipFile = (list: string[]) => {
  const zip = new AdmZip();
  list.forEach((file, index) => {
    const data = file.replace(/^data:image\/\w+;base64,/, '');
    const buf = Buffer.from(data, 'base64');
    zip.addFile(`image_${index}.png`, buf);
  });
  return zip.toBuffer();
};

const getImageZipFile = (srcList: string[]) : string => {
  const result = srcList.map((src) => getImageUri(src));
  return zipFile(result);
};

export { getImageZipFile, getImageUri, zipFile };
