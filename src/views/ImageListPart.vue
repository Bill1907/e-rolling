<script setup lang="ts">
import {
  defineEmits, defineProps, onMounted, ref, watch,
} from 'vue';
import type { Ref } from 'vue';

const imageSrcList: Ref<string[] | null> = ref(null);
const selectImages : Ref<string[]> = ref([]);
const emit = defineEmits(['setSelectImageList']);
const props = defineProps<{list: string[]}>();

watch(selectImages, (value) : void => {
  emit('setSelectImageList', value);
});

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
      <label :for="`imageSrc_${idx}`">
        <input
          type="checkbox"
          :id="`imageSrc_${idx}`"
          :value="imageSrc"
          v-model="selectImages"
        />
        <img :src="imageSrc" alt=""/>
      </label>
    </div>
  </div>
</template>

<style lang="scss">

</style>
