<template>
  <td :class="classes" :style="styles" :colspan="span">
    <span :class="prefixCls + '__label'"
      ><slot name="label">{{ label }}</slot></span
    ><span :class="prefixCls + '__separator'"
      ><slot name="separator">{{ $parent.separator }}</slot></span
    ><span :class="prefixCls + '__content'"><slot></slot></span>
  </td>
</template>
<script>
import config from "../../config";
const prefixCls = config.prefix + "descriptions";

export default {
  name: prefixCls + "-item",
  props: {
    // 标签文本
    label: {
      type: String,
      default: "",
    },
    // 列的数量
    span: {
      type: Number,
      default: 1,
    },
    // 列的宽度，不同行相同列的宽度按最大值设定
    width: {
      type: [Number, String],
    },
    // 列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列
    minWidth: {
      type: [Number, String],
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

      if (this.width) {
        styles.width =
          typeof this.width === "number" ? this.width + "px" : this.width;
      }

      if (this.minWidth) {
        styles.minWidth =
          typeof this.minWidth === "number"
            ? this.minWidth + "px"
            : this.minWidth;
      }

      return styles;
    },
  },
  methods: {},
};
</script>
