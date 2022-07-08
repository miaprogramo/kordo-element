<template>
  <div :class="[prefixCls]" :style="this.$parent.itemStyle">
    <slot></slot>
  </div>
</template>
<script>
import config from "../../config";
const prefixCls = config.prefix + "grid-item";

export default {
  name: prefixCls,
  data() {
    return {
      prefixCls,
    };
  },
  methods: {},
};
</script>
