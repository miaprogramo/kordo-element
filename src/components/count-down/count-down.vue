<template>
  <span :class="[prefixCls]">{{ result }}</span>
</template>
<script>
import config from "../../config";
const prefixCls = config.prefix + "count-down";

function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

export default {
  name: prefixCls,
  props: {
    // 目标时间
    target: {
      type: [Date, Number],
    },
    // 自动倒计时间隔
    interval: {
      type: Number,
      default: 1000,
    },
    // 自定义显示格式
    format: {
      type: Function,
    },
    // 倒计时结束时的钩子
    onEnd: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      prefixCls,
      lastTime: "",
    };
  },
  methods: {
    initTime() {
      let lastTime = 0;
      let targetTime = 0;
      try {
        if (Object.prototype.toString.call(this.target) === "[object Date]") {
          targetTime = this.target.getTime();
        } else {
          targetTime = new Date(this.target).getTime();
        }
      } catch (e) {
        throw new Error("invalid target prop", e);
      }

      lastTime = targetTime - new Date().getTime();
      return lastTime < 0 ? 0 : lastTime;
    },
    tick() {
      let { lastTime } = this;

      this.timer = setTimeout(() => {
        if (lastTime < this.interval) {
          clearTimeout(this.timer);
          this.onEnd(); // 结束
        } else {
          lastTime -= this.interval;
          this.lastTime = lastTime;
          this.tick();
        }
      }, this.interval);
    },
    defaultFormat(time) {
      const hours = 60 * 60 * 1000;
      const minutes = 60 * 1000;

      const h = Math.floor(time / hours);
      const m = Math.floor((time - h * hours) / minutes);
      const s = Math.floor((time - h * hours - m * minutes) / 1000);

      return `${fixedZero(h)}:${fixedZero(m)}:${fixedZero(s)}`;
    },
  },
  computed: {
    result() {
      const { format = this.defaultFormat } = this;
      return format(this.lastTime);
    },
  },
  watch: {
    target() {
      if (this.timer) clearTimeout(this.timer);
      this.lastTime = this.initTime();
      this.tick();
    },
  },
  created() {
    this.lastTime = this.initTime();
  },
  mounted() {
    this.tick();
  },
  beforeDestroy() {
    if (this.timer) clearTimeout(this.timer);
  },
};
</script>
