<template>
  <span :class="[prefixCls]"></span>
</template>
<script>
import { CountUp } from "countup.js";
import config from "../../config";
const prefixCls = config.prefix + "count-up";

export default {
  name: prefixCls,
  props: {
    // 目标值
    target: {
      type: Number,
      required: true,
    },
    // 起始值
    startValue: {
      type: Number,
      default: 0,
    },
    // 小数位数
    decimals: {
      type: Number,
      default: 0,
    },
    // 数字是否有千位分隔符
    hasSeparator: {
      type: Boolean,
      default: false,
    },
    // 数字千位分隔符
    separator: {
      type: String,
      default: ",",
    },
    // 前缀
    prefix: {
      type: String,
      default: "",
    },
    // 后缀
    suffix: {
      type: String,
      default: "",
    },
    // 持续时间
    duration: {
      type: Number,
      default: 2,
    },
    // 是否使用easing动画曲线
    easing: {
      type: Boolean,
      default: true,
    },
    // 自定义显示格式
    format: {
      type: Function,
    },
    // 动画结束时的钩子
    onEnd: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      prefixCls,
      CountUp: null,
    };
  },
  watch: {
    target(value) {
      if (this.CountUp && this.CountUp.update) {
        this.CountUp.update(value);
      }
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (!this.CountUp) {
        let options = {
          startVal: this.startValue,
          decimalPlaces: this.decimals,
          duration: this.duration,
          useGrouping: this.hasSeparator,
          useEasing: this.easing,
          separator: this.separator,
          prefix: this.prefix,
          suffix: this.suffix,
        };

        if (this.format) {
          options.formattingFn = this.format;
        }

        this.CountUp = new CountUp(this.$el, this.target, options);

        this.CountUp.start(() => {
          this.onEnd(this.CountUp);
        });
      }
    },
    start(callback) {
      if (this.CountUp && this.CountUp.start) {
        this.CountUp.start(() => {
          callback && callback(this.CountUp);
        });
      }
    },
    pauseResume() {
      if (this.CountUp && this.CountUp.pauseResume) {
        this.CountUp.pauseResume();
      }
    },
    reset() {
      if (this.CountUp && this.CountUp.reset) {
        this.CountUp.reset();
      }
    },
    update(newEndVal) {
      if (this.CountUp && this.CountUp.update) {
        this.CountUp.update(newEndVal);
      }
    },
    destroy() {
      this.reset();
      this.CountUp = null;
    },
  },
  beforeDestroy() {
    this.destroy();
  },
};
</script>
