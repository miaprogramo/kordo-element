<template>
  <div :class="[prefixCls]" :style="style" @click="handleClick">
    <slot></slot>
  </div>
</template>
<script>
import config from "../../config";
const prefixCls = config.prefix + "notice-bar-item";

export default {
  name: prefixCls,
  data() {
    return {
      prefixCls,
    };
  },
  computed: {
    style() {
      const height = this.$parent.$parent.height + "px";
      return {
        height,
        "line-height": height,
      };
    },
  },
  mounted() {
    this.$parent.init();
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
  },
};
</script>
