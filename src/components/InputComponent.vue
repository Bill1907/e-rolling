<script lang="ts">
import { mapActions, mapState } from 'pinia';
import { defineComponent } from 'vue';
import { getHTML } from '../modules/crawling/crawling';
import { useUrlDataStore } from '../store/urlData';

export default defineComponent({
  name: 'InputComponent',
  computed: {
    ...mapState(useUrlDataStore, [
      'uri',
    ]),
  },
  methods: {
    ...mapActions(useUrlDataStore, [
      'setUri', 'addImageList',
    ]),
    async handleClickButton() {
      this.setUri(this.uri);
      const imageList: string[] | string = await getHTML(this.uri);
      if (Array.isArray(imageList)) {
        imageList.forEach((image: string) => this.addImageList(image));
      }
    },
  },
});
</script>

<template>
  <div>
    <label for="uri">URI
      <input type="text" id="uri" v-model="uri">
    </label>
    <button @click="handleClickButton">Search</button>
  </div>
</template>

<style scoped lang="scss">
</style>
