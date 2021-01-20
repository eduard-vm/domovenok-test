<template>
  <div class="fraction-input">
    <el-number-input min="1" max="99" v-model="numerator" />
    <hr>
    <el-number-input min="1" max="99" v-model="denominator" />
  </div>
</template>

<script>
import ElNumberInput from './ElNumberInput';

export default {
  name: 'CalcForm',

  components: {
    ElNumberInput,
  },

  props: {
    numerator: Number,
    denominator: Number,
  },
};
</script>
