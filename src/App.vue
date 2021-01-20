<template>
  <div id="app">
    <calc-form />
  </div>
</template>

<script>
import CalcForm from './components/CalcForm.vue';

export default {
  name: 'App',
  components: {
    CalcForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
