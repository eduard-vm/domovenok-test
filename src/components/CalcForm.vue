<template>
  <div class="calc-form">
    <FractionInput />
  </div>
</template>

<script>
import FractionInput from './FractionInput.vue';

export default {
  name: 'CalcForm',

  components: {
    FractionInput,
  },
};
</script>
