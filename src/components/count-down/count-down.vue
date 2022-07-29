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
      countDownStartTime: "",
      count: 0,
    };
  },
  methods: {
    initTime() {
      let lastTime = 0;
      try {
        if (Object.prototype.toString.call(this.target) === "[object Date]") {
          let targetTime = this.target.getTime();
          lastTime = targetTime - new Date().getTime();
        } else {
          lastTime = this.target;
        }
      } catch (e) {
        throw new Error("invalid target prop", e);
      }

      return lastTime < 0 ? 0 : lastTime;
    },
    tick() {
      this.count = 0;
      this.countDownStartTime = new Date().getTime();
      if (this.lastTime >= 0) {
        this.timer = setTimeout(this.countDown, this.interval);
      }
    },
    countDown() {
      this.count++;

      const offset =
        new Date().getTime() -
        (this.countDownStartTime + this.count * this.interval);

      let nextInterval = this.interval - offset;
      if (nextInterval < 0) {
        nextInterval = 0;
      }

      const lastTime = this.lastTime - this.interval;
      this.lastTime = lastTime < 0 ? 0 : lastTime;

      if (this.lastTime <= 0) {
        this.timer && clearTimeout(this.timer);
        this.onEnd(); // 倒计时结束
      } else {
        this.timer = setTimeout(this.countDown, nextInterval);
      }
    },
    defaultFormat(time) {
      const hours = 60 * 60 * 1000;
      const minutes = 60 * 1000;

      const h = Math.floor(time / hours);
      const m = Math.floor((time - h * hours) / minutes);
      const s = Math.floor((time - h * hours - m * minutes) / 1000);

      return `${fixedZero(h)}:${fixedZero(m)}:${fixedZero(s)}`;
    },
    lastTimeFormat(time) {
      time = time / 1000;
      const days = Math.floor(time / 86400);
      const hours = Math.floor((time % 86400) / 3600);
      const minutes = Math.floor(((time % 86400) % 3600) / 60);
      const seconds = Math.floor(((time % 86400) % 3600) % 60);

      return { days, hours, minutes, seconds };
    },
  },
  computed: {
    result() {
      const { format = this.defaultFormat } = this;
      return format(this.lastTime, this.lastTimeFormat(this.lastTime));
    },
  },
  watch: {
    target() {
      this.timer && clearTimeout(this.timer);
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
    this.timer && clearTimeout(this.timer);
  },
};
</script>
