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
    col: {
      // 最大支持的列数
      type: Number,
      default: 3,
    },
    square: {
      // 是否宽高一致
      type: Boolean,
      default: false,
    },
    padding: {
      // 内容的间距，默认单位为px
      type: [Number, String],
      default: 24,
    },
    center: {
      // 是否将格子内容居中显示
      type: Boolean,
      default: false,
    },
    border: {
      // 是否显示边框
      type: Boolean,
      default: true,
    },
    hover: {
      // 是否开启鼠标悬停效果
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
