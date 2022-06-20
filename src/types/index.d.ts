declare module 'adm-zip';

declare let Blob: {
  prototype: Blob;
  new(arrayBuffers: ArrayBuffer[], p: { type: string }): Blob;
};
