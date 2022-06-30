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
  urlDataStore.imageList = [];
  const list: string[] | string = await getHTML(value);
  if (Array.isArray(list)) {
    urlDataStore.imageList.push(...list);
  }
};

const handleDownloadBtn = async () => {
  if (urlDataStore.selectImageList.length <= 1) {
    const imageResource = await getImageUri(urlDataStore.selectImageList[0]);
    singleImageFileDownlaod(imageResource);
  } else {
    const buffer: string = await getImageZipFile(urlDataStore.selectImageList);
    zipFileDownload(buffer);
  }
};

const handleScrollUp = (e: Event) => {
  e.preventDefault();
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
};

</script>

<template>
  <div
    id="wrap"
  >
    <InputComponent
      :uri="urlDataStore.uri"
      @handleSearchBtn="handleSearchBtn"
      @handleDownloadBtn="handleDownloadBtn"
    />
    <ImageListPart
      v-if="urlDataStore.imageList.length > 0"
      :list="urlDataStore.imageList"
      @setSelectImageList="setSelectImageList"
    />
    <button
      class="up-btn"
      @click="handleScrollUp"
    >
      <img style="width: 40px" src="../src/assets/upArrow.png" alt="맨위로">
    </button>
  </div>
</template>

<style lang="scss">

</style>
