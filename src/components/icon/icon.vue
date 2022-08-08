<template>
  <svg
    :class="[prefixCls]"
    :style="styles"
    ref="icon"
    @click="$emit('click', $event)"
  >
    <use :href="'#' + name"></use>
  </svg>
</template>
<script>
import "./iconpark";
import config from "../../config";
const prefixCls = config.prefix + "icon";

export default {
  name: prefixCls,
  props: {
    name: String,
    color: String,
    size: String | Number,
  },
  data() {
    return {
      prefixCls,
    };
  },
  computed: {
    styles() {
      let styles = {};
      if (typeof this.size === "number") {
        styles.fontSize = this.size + "px";
      } else if (typeof this.size === "string") {
        styles.fontSize = this.size;
      }
      if (this.color) styles.color = this.color;
      return styles;
    },
  },
};
</script>
