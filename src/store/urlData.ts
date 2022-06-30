import { defineStore } from 'pinia';

interface urlDataStoreState {
  uri: string
  imageList: string[]
  selectImageList: string[]
}

export const useUrlDataStore = defineStore('urlData', {
  state: (): urlDataStoreState => ({
    uri: 'https://www.naver.com/',
    imageList: [],
    selectImageList: [],
  }),
  getters: {},
  actions: {},
});
