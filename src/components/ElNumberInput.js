export default {
  props: {
    value: [Number, String],
    min: [Number, String],
    max: [Number, String],
  },

  methods: {
    inputHandler(e) {
      if (e.target.value) {
        const max = Number(this.max);
        const min = Number(this.min);
        // Only integer
        if (/[^0-9]+/.test(e.target.value)) {
          e.target.value = e.target.value.replace(/[^0-9]*/g, '');
        }
        // Between values
        if (Number(e.target.value) > max || Number(e.target.value) < min) {
          e.target.value = this.value;
        }
      }
      this.$emit('input', e.target.value);
    },

    blurHandler() {
      if (!this.value) {
        this.$refs.input.value = 1;
        this.$emit('input', 1);
      }
    },
  },

  render(h) {
    return h('input', {
      staticClass: 'el-number-input',
      ref: 'input',
      attrs: {
        type: 'text',
        value: this.value,
      },
      on: {
        input: this.inputHandler,
        blur: this.blurHandler,
      },
    });
  },
};
