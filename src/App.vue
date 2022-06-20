<script setup lang="ts">
import InputComponent from './components/InputComponent.vue';
import ImageListPart from './views/ImageListPart.vue';
import { useUrlDataStore } from './store/urlData';
import { getHTML } from './modules/crawling/crawling';

// store
const urlDataStore = useUrlDataStore();
const { uri, imageList, selectImageList } = urlDataStore;

const setSelectImageList = (value: string[]) => {
  urlDataStore.$patch((state) => {
    state.selectImageList = value;
  });
};

// event handler
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

const handleDownloadBtn = () => {
  console.log(selectImageList);
};
</script>

<template>
  <div id="wrap">
    <InputComponent
      :uri="uri"
      @handleSearchBtn="handleSearchBtn"
      @handleDownloadBtn="handleDownloadBtn"
    />
    <ImageListPart
      :list="imageList"
      @setSelectImageList="setSelectImageList"
    />
  </div>
</template>

<style lang="scss">

</style>
