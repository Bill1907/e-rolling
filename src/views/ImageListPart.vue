<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue';
import type { Ref } from 'vue';

const imageSrcList: Ref<string[] | null> = ref(null);
const props = defineProps<{list: string[]}>();

onMounted(() => {
  imageSrcList.value = props.list;
});
</script>

<template>
  <div
    v-for="(imageSrc, idx) in imageSrcList"
    :key="`imageSrc_${idx}`"
  >
    <div>
      <img :src="imageSrc" alt=""/>
    </div>
  </div>
</template>

<style lang="scss">

</style>
