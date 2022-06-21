import AdmZip from 'adm-zip';

const getImageUri = async (uri: string): Promise<string> => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx = canvas?.getContext('2d');
  const img = new Image();
  img.src = uri;
  img.crossOrigin = 'Anonymous';
  await new Promise((resolve) => {
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      resolve(null);
    };
  });
  const result = canvas.toDataURL('image/png');
  return result;
};

const zipFile = (list: string[]) => {
  const zip = new AdmZip();
  list.forEach((file: any, index: number) => {
    const data = file.replace(/^data:image\/\w+;base64,/, '');
    const buf = Buffer.from(data, 'base64');
    zip.addFile(`image_${index}.png`, buf);
  });
  return zip.toBuffer();
};

const getImageZipFile = async (srcList: string[]) : Promise<string> => {
  const result = srcList.map((src) => getImageUri(src)); // [Promise]
  const tempArr: string[] = [];
  await Promise.all(result).then((value) => {
    tempArr.push(...value);
  });
  return zipFile(tempArr);
};

export { getImageZipFile, getImageUri, zipFile };
