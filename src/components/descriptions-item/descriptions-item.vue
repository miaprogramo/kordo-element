<template>
  <div :class="classes">
    <span :class="prefixCls + '_label'"
      ><slot name="label">{{ label }}</slot></span
    >
    <span><slot></slot></span>
  </div>
</template>
<script>
import config from "../../config";
const prefixCls = config.prefix;

export default {
  name: prefixCls + "descriptions-item",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      prefixCls,
    };
  },
  computed: {
    classes() {
      return [prefixCls + "descriptions__cell"];
    },
    styles() {
      let styles = {};
      return styles;
    },
  },
  methods: {},
};
</script>
