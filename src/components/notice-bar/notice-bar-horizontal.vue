<template>
  <div :class="classes" :style="style" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { on, off } from "../../utils/dom";
import config from "../../config";
const prefixCls = config.prefix + "notice-bar";

export default {
  name: "notice-bar-horizontal",
  data() {
    return {
      prefixCls,
      style: {},
      overflow: false,
    };
  },
  computed: {
    scrollable() {
      return this.$parent.scrollable;
    },
    speed() {
      return this.$parent.speed;
    },
    classes() {
      return [
        prefixCls + "-horizontal-content",
        {
          [prefixCls + "_scrollable"]: this.scrollable || this.overflow,
        },
      ];
    },
  },
  mounted() {
    on(window, "load", this.checkOverflow, false);
    this.checkOverflow();
  },
  beforeDestroy() {
    off(window, "load", this.checkOverflow, false);
  },
  methods: {
    handleClick(event) {
      this.$emit("click", event);
    },
    checkOverflow() {
      const wrap = this.$el.parentNode.getBoundingClientRect();
      const content = this.$el.getBoundingClientRect();

      if (!wrap.width || !content.width) return;

      if (this.scrollable) {
        this.start(content.width);
      } else if (wrap.width < content.width) {
        this.overflow = true;
        this.start(content.width);
      }
    },
    start(width) {
      const duration = width / this.speed;
      this.style = {
        "animation-duration": duration + "s",
      };
    },
  },
};
</script>
