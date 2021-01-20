<template>
  <div class="calc-form">
    <div>
      <div class="calc-form__item"
        v-for="(item, idx) of items"
        :key="idx"
      >
        <button v-if="items.length > 2"
           class="calc-form__remove-button" @click="removeElement(idx)" />
        <fraction-input class="calc-form__input" v-model="items[idx]" />
        <div class="calc-form__operator">
          {{ items.length - 1 === idx ? '=' : '+' }}
        </div>
      </div>
      <div class="calc-form__operator">
        {{ sum }}
      </div>
    </div>
    <div class="calc-form__control">
      <button
        class="calc-form__add-element"
        @click="addElement">add new element</button>
    </div>
  </div>
</template>

<script>
import FractionInput from './FractionInput.vue';

export default {
  name: 'CalcForm',

  components: {
    FractionInput,
  },

  data() {
    return {
      items: [
        [1, 1],
        [1, 1],
      ],
    };
  },

  computed: {
    sum() {
      let result = 0;

      this.items.forEach((item) => {
        result += Number(item[0] / item[1]);
      });

      return result;
    },
  },

  methods: {
    addElement() {
      if (this.items.length < 5) {
        this.items.push([1, 1]);
      }
    },

    removeElement(idx) {
      const items = this.items.filter((_, i) => i !== idx);
      this.$set(this, 'items', items);
    },
  },
};
</script>
