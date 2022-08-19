<template>
  <div>
    <div ref="point" :class="classes" :style="[{ zIndex }, styles]">
      <slot></slot>
    </div>
    <div v-show="slot" :style="slotStyle"></div>
  </div>
</template>
<script>
import { on, off } from "../../utils/dom";
import { isClient } from "../../utils";
import config from "../../config";
const prefixCls = config.prefix + "affix";

function getScroll(target, top) {
  const prop = top ? "pageYOffset" : "pageXOffset";
  const method = top ? "scrollTop" : "scrollLeft";

  let ret = target[prop];

  if (isClient && typeof ret !== "number") {
    ret = window.document.documentElement[method];
  }

  return ret;
}

function getOffset(element) {
  if (!isClient) return;
  const rect = element.getBoundingClientRect();

  const scrollTop = getScroll(window, true);
  const scrollLeft = getScroll(window);

  const docEl = window.document.body;
  const clientTop = docEl.clientTop || 0;
  const clientLeft = docEl.clientLeft || 0;

  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft,
  };
}

export default {
  name: prefixCls,
  emits: ["change"],
  props: {
    // 距离窗口顶部达到指定偏移量后触发
    offsetTop: {
      type: Number,
      default: 0,
    },
    // 距离窗口底部达到指定偏移量后触发
    offsetBottom: {
      type: Number,
    },
    // addEventListener 原生的 useCapture 选项
    useCapture: {
      type: Boolean,
      default: false,
    },
    // css属性z-index
    zIndex: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      affix: false,
      styles: {},
      slot: false,
      slotStyle: {},
    };
  },
  computed: {
    offsetType() {
      let type = "top";
      if (this.offsetBottom >= 0) {
        type = "bottom";
      }

      return type;
    },
    classes() {
      return [
        {
          [`${prefixCls}`]: true,
        },
      ];
    },
  },
  mounted() {
    on(window, "scroll", this.handleScroll, this.useCapture);
    on(window, "resize", this.handleScroll, this.useCapture);
    this.handleScroll();
  },
  beforeDestroy() {
    off(window, "scroll", this.handleScroll, this.useCapture);
    off(window, "resize", this.handleScroll, this.useCapture);
  },
  methods: {
    handleScroll() {
      if (!isClient) return;
      const affix = this.affix;
      const scrollTop = getScroll(window, true);
      const elOffset = getOffset(this.$el);
      const windowHeight = window.innerHeight;
      const elHeight = this.$el.getElementsByTagName("div")[0].offsetHeight;

      // Fixed Top
      if (
        elOffset.top - this.offsetTop < scrollTop &&
        this.offsetType == "top" &&
        !affix
      ) {
        this.affix = true;
        this.slotStyle = {
          width: this.$refs.point.clientWidth + "px",
          height: this.$refs.point.clientHeight + "px",
        };
        this.slot = true;
        this.styles = {
          top: `${this.offsetTop}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`,
        };

        this.$emit("change", true);
      } else if (
        elOffset.top - this.offsetTop > scrollTop &&
        this.offsetType == "top" &&
        affix
      ) {
        this.slot = false;
        this.slotStyle = {};
        this.affix = false;
        this.styles = null;

        this.$emit("change", false);
      }

      // Fixed Bottom
      if (
        elOffset.top + this.offsetBottom + elHeight >
          scrollTop + windowHeight &&
        this.offsetType == "bottom" &&
        !affix
      ) {
        this.affix = true;
        this.styles = {
          bottom: `${this.offsetBottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`,
        };

        this.$emit("change", true);
      } else if (
        elOffset.top + this.offsetBottom + elHeight <
          scrollTop + windowHeight &&
        this.offsetType == "bottom" &&
        affix
      ) {
        this.affix = false;
        this.styles = null;

        this.$emit("change", false);
      }
    },
  },
};
</script>
