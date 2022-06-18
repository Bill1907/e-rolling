import { defineStore } from 'pinia';

interface urlDataStoreState {
  uri: string
  imageList: string[]
  selectImageList: string[]
}

export const useUrlDataStore = defineStore('urlData', {
  state: (): urlDataStoreState => ({
    uri: 'https://unsplash.com/',
    imageList: [],
    selectImageList: [],
  }),
  getters: {},
  actions: {
    addImageList(data: string) {
      this.imageList.push(data);
    },
  },
});
