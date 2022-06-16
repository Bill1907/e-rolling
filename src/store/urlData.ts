import { defineStore } from 'pinia';

export const useUrlDataStore = defineStore('urlData', {
  state: () => ({
    uri: 'https://unsplash.com/' as string,
    imageList: [] as string[],
  }),
  getters: {},
  actions: {
    setUri(data: string) {
      this.uri = data;
    },
    addImageList(data: string) {
      this.imageList.push(data);
    },
  },
});
