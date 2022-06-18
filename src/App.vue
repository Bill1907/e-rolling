<script setup lang="ts">
import InputComponent from './components/InputComponent.vue';
import ImageListPart from './views/ImageListPart.vue';
import { useUrlDataStore } from './store/urlData';
import { getHTML } from './modules/crawling/crawling';

const urlDataStore = useUrlDataStore();
const { uri, imageList } = urlDataStore;

const handleSearchBtn = async (value: string) => {
  // uri data change
  urlDataStore.$patch({
    uri: value,
  });
  const list: string[] | string = await getHTML(value);
  if (Array.isArray(list)) {
    list.forEach((image: string) => {
      urlDataStore.$patch((state) => {
        state.imageList.push(image);
      });
    });
  }
};

const setSelectImageList = (value: string[]) => {
  urlDataStore.$patch((state) => {
    state.selectImageList = value;
  });
};
</script>

<template>
  <div id="wrap">
    <InputComponent :uri="uri" @handleSearchBtn="handleSearchBtn"/>
    <ImageListPart :list="imageList" @setSelectImageList="setSelectImageList"/>
  </div>
</template>

<style lang="scss">

</style>
