import { defineStore } from 'pinia';

export const useUrlDataStore = defineStore('urlData', {
  state: () => ({
    uri: '' as string,
  }),
  getters: {},
  actions: {
    setUri(data: string) {
      this.uri = data;
    },
  },
});
