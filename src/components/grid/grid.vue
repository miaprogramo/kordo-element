<template>
  <div :class="classes" :style="style" ref="grid">
    <slot></slot>
  </div>
</template>
<script>
import elementResizeDetectorMaker from "element-resize-detector";
import throttle from "lodash.throttle";
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
      observer: null,
      handleResize: () => {},
    };
  },
  computed: {
    classes() {
      return [
        prefixCls,
        {
          [prefixCls + "_center"]: this.center,
          [prefixCls + "_border"]: this.border,
          [prefixCls + "_hover"]: this.hover,
        },
      ];
    },
    style() {
      let style = {
        "grid-template-columns": `repeat(${this.col}, 1fr)`,
      };
      // if (typeof this.gutter === "number") {
      //   style["grid-gap"] = this.gutter + "px " + this.gutter + "px";
      // } else {
      //   style["grid-gap"] = this.gutter + " " + this.gutter;
      // }
      return style;
    },
    itemStyle() {
      let itemStyle = {
        height: this.itemHeight,
      };
      if (typeof this.padding === "number") {
        itemStyle["padding"] = this.padding + "px";
      } else {
        itemStyle["padding"] = this.padding;
      }
      return itemStyle;
    },
  },
  mounted() {
    if (this.square) {
      this.handleResize = throttle(this.onResize, 150, { leading: false });
      this.observer = elementResizeDetectorMaker();
      this.observer.listenTo(this.$refs.grid, this.handleResize);
    }
  },
  beforeDestroy() {
    if (this.observer) {
      this.observer.removeListener(this.$refs.grid, this.handleResize);
    }
  },
  methods: {
    onResize() {
      this.itemHeight = this.$children[0].$el.offsetWidth + "px";
    },
  },
};
</script>
