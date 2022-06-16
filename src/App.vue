<script lang="ts">
import { defineComponent } from 'vue';
import InputComponent from './components/InputComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    InputComponent,
  },
});
</script>

<template>
  <InputComponent/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
