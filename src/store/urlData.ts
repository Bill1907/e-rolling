import { defineStore } from 'pinia';

interface urlDataStoreState {
  uri: string
  imageList: string[]
  selectImageList: string[]
}

export const useUrlDataStore = defineStore('urlData', {
  state: (): urlDataStoreState => ({
    uri: '',
    imageList: [],
    selectImageList: [],
  }),
  getters: {},
  actions: {},
});
