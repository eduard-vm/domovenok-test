<template>
  <div class="fraction-input">
    <el-number-input min="1" step="1" max="99"
      :value="value[0]"
      @input="$emit('input', [Number($event), value[1]])"
    />
    <hr>
    <el-number-input min="1" step="1" max="99"
      :value="value[1]"
      @input="$emit('input', [value[0], Number($event)])"
    />
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
    value: Array,
    default() {
      return [1, 1];
    },
  },
};
</script>
