<script setup lang="ts">
import InputComponent from './components/InputComponent.vue';
import ImageListPart from './views/ImageListPart.vue';
import { useUrlDataStore } from './store/urlData';
import { getHTML } from './modules/crawling/crawling';

const urlDataStore = useUrlDataStore();
const { uri, imageList, addImageList } = urlDataStore;

const handleSearchBtn = async (value: string) => {
  urlDataStore.$patch({
    uri: value,
  });
  const list: string[] | string = await getHTML(value);
  if (Array.isArray(list)) {
    list.forEach((image: string) => addImageList(image));
  }
};
</script>

<template>
  <InputComponent :uri="uri" @handleSearchBtn="handleSearchBtn"/>
  <ImageListPart :list="imageList" />
</template>

<style lang="scss">

</style>
