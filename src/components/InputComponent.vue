<template>
  <div>
    <label for="uri">URI
      <input type="text" id="uri" v-model="uri">
    </label>
    <button @click="handleClickButton">Search</button>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'pinia';
import {
  defineComponent, Ref, ref, UnwrapRef,
} from 'vue';
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
      'setUri',
    ]),
    handleClickButton() {
      this.setUri(this.uri);
      const test = getHTML(this.uri);
      console.log(test);
    },
  },
  setup: () => {
    const uri: Ref<UnwrapRef<string>> = ref('');
    return { uri };
  },
});
</script>

<style scoped lang="scss">
</style>
