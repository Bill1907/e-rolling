<script setup lang="ts">
import {
  defineProps, defineEmits, ref, onMounted,
} from 'vue';
import type { Ref } from 'vue';

const props = defineProps<{uri: string}>();
const emit = defineEmits(['handleSearchBtn', 'handleDownloadBtn']);
const searchInput: Ref<string> = ref('');

onMounted(() => {
  searchInput.value = props.uri;
});

</script>

<template>
  <div class="uri-input-area">
    <div class="url-input-box">
      <label for="uri">
        <input
          type="text"
          id="uri"
          placeholder="🔍 검색"
          v-model="searchInput"
          @keydown.enter="emit('handleSearchBtn', searchInput)"
        />
      </label>
      <button @click="emit('handleDownloadBtn')">
        <img
          class="downlaod-icon"
          src="../assets/download.png"
          alt=""
        />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
