<template>
  <div :class="classes" :style="styles" ref="grid">
    <slot></slot>
  </div>
</template>
<script>
import config from "../../config";
const prefixCls = config.prefix + "grid";

export default {
  name: prefixCls,
  props: {
    // 最大支持的列数
    col: {
      type: Number,
      default: 3,
    },
    // 内容的间距，默认单位为px
    padding: {
      type: [Number, String],
      default: 24,
    },
    // 是否宽高一致
    square: {
      type: Boolean,
      default: false,
    },
    // 是否将格子内容居中显示
    center: {
      type: Boolean,
      default: false,
    },
    // 是否显示边框
    border: {
      type: Boolean,
      default: true,
    },
    // 是否开启鼠标悬停效果
    hover: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      prefixCls,
      itemHeight: "auto",
    };
  },
  computed: {
    classes() {
      return [
        prefixCls,
        {
          ["is-square"]: this.square,
          ["is-center"]: this.center,
          ["is-border"]: this.border,
          ["is-hover-shadow"]: this.hover,
        },
      ];
    },
    styles() {
      let styles = {
        "grid-template-columns": `repeat(${this.col}, 1fr)`,
      };
      return styles;
    },
    itemStyles() {
      let itemStyles = {
        height: this.itemHeight,
      };
      if (typeof this.padding === "number") {
        itemStyles["padding"] = this.padding + "px";
      } else {
        itemStyles["padding"] = this.padding;
      }
      return itemStyles;
    },
  },
};
</script>
