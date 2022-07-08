<template>
  <span :class="[prefixCls]"
    ><slot name="prefix">{{ prefix }}</slot
    >{{ currentValue }}<slot name="suffix">{{ suffix }}</slot></span
  >
</template>
<script>
import Numeral from "numeral";
import config from "../../config";
const prefixCls = config.prefix + "numeral";

export default {
  name: prefixCls,
  emits: ["change"],
  props: {
    value: {
      type: [String, Number],
    },
    format: {
      type: String,
    },
    prefix: {
      type: [String, Number],
    },
    suffix: {
      type: [String, Number],
    },
  },
  data() {
    return {
      prefixCls,
      currentValue: "",
    };
  },
  watch: {
    value() {
      this.init();
    },
    format() {
      this.init();
    },
  },
  methods: {
    init() {
      if (this.value !== undefined) {
        const num = Numeral(this.value);

        if (this.format) {
          this.currentValue = num.format(this.format);
        } else {
          this.currentValue = num.value();
        }
        this.$emit("change", this.currentValue);
      }
    },
    getValue() {
      return this.currentValue;
    },
  },
  mounted() {
    this.init();
  },
};
</script>
