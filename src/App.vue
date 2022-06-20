<script setup lang="ts">
import InputComponent from './components/InputComponent.vue';
import ImageListPart from './views/ImageListPart.vue';
import { useUrlDataStore } from './store/urlData';
import { getHTML } from './modules/crawling';
import { getImageZipFile, getImageUri } from './modules/fs';
import { singleImageFileDownlaod, zipFileDownload } from './modules/download';

// store
const urlDataStore = useUrlDataStore();

// data setup
const setSelectImageList = (value: string[]) => {
  urlDataStore.selectImageList = value;
};

// event handler
const handleSearchBtn = async (value: string) => {
  urlDataStore.uri = value;
  const list: string[] | string = await getHTML(value);
  if (Array.isArray(list)) {
    list.forEach((image: string) => {
      urlDataStore.imageList.push(image);
    });
  }
};

const handleDownloadBtn = () => {
  if (urlDataStore.selectImageList.length <= 1) {
    const imageResource = getImageUri(urlDataStore.selectImageList[0]);
    singleImageFileDownlaod(imageResource);
  } else {
    const buffer: string = getImageZipFile(urlDataStore.selectImageList);
    zipFileDownload(buffer);
  }
};
</script>

<template>
  <div id="wrap">
    <InputComponent
      :uri="urlDataStore.uri"
      @handleSearchBtn="handleSearchBtn"
      @handleDownloadBtn="handleDownloadBtn"
    />
    <ImageListPart
      :list="urlDataStore.imageList"
      @setSelectImageList="setSelectImageList"
    />
  </div>
</template>

<style lang="scss">

</style>
