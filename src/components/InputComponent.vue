<script setup lang="ts">
import {
  defineProps, defineEmits, ref, onMounted,
} from 'vue';
import type { Ref } from 'vue';

const props = defineProps<{uri: string}>();
const emit = defineEmits(['handleSearchBtn']);
const searchInput: Ref<string> = ref('');

onMounted(() => {
  searchInput.value = props.uri;
});

</script>

<template>
  <div class="uri-input-area">
    <div class="default-width">
      <label for="uri">URI
        <input
          type="text"
          id="uri"
          v-model="searchInput"
          />
      </label>
      <button @click="emit('handleSearchBtn', searchInput)">Search</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.uri-input-area {
  display: flex;
}
</style>
