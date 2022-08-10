<template>
  <td :class="classes">
    <span :class="prefixCls + '__label'"
      ><slot name="label">{{ label }}</slot></span
    >
    <span :class="prefixCls + '__content'"><slot></slot></span>
  </td>
</template>
<script>
import config from "../../config";
const prefixCls = config.prefix + "descriptions";

export default {
  name: prefixCls + "-item",
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
      return [prefixCls + "__cell"];
    },
    styles() {
      let styles = {};
      return styles;
    },
  },
  methods: {},
};
</script>
