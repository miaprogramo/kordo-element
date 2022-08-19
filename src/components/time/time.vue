<template>
  <span :class="classes" @click="handleClick">{{ date }}</span>
</template>
<script>
import { oneOf } from "../../utils/assist";
import Time from "./time";
import { isClient } from "../../utils";
import config from "../../config";
const prefixCls = config.prefix + "time";

export default {
  name: prefixCls,
  props: {
    // 需要对比的时间，可以是时间戳或 Date 类型
    time: {
      type: [Number, Date, String],
      required: true,
    },
    // 类型，可选值为 relative 、date 或 datetime
    type: {
      type: String,
      validator(value) {
        return oneOf(value, ["relative", "date", "datetime"]);
      },
      default: "relative",
    },
    // 自动更新的间隔，单位：秒
    interval: {
      type: Number,
      default: 60,
    },
    // 填写该值，点击会定位锚点
    hash: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      date: "",
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-with-hash`]: this.hash,
        },
      ];
    },
  },
  watch: {
    time() {
      this.setTime();
    },
  },
  methods: {
    handleClick() {
      if (isClient && this.hash !== "") window.location.hash = this.hash;
    },
    setTime() {
      const type = typeof this.time;
      let time;

      if (type === "number") {
        const timestamp =
          this.time.toString().length > 10 ? this.time : this.time * 1000;
        time = new Date(timestamp).getTime();
      } else if (type === "object") {
        time = this.time.getTime();
      } else if (type === "string") {
        time = new Date(this.time).getTime();
      }

      if (this.type === "relative") {
        this.date = Time(time);
      } else {
        const date = new Date(this.time);
        const year = date.getFullYear();
        const month =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
        const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        const hour =
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        const minute =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const second =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

        if (this.type === "datetime") {
          this.date = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
        } else if (this.type === "date") {
          this.date = `${year}-${month}-${day}`;
        }
      }
    },
  },
  mounted() {
    this.setTime();
    this.timer = setInterval(() => {
      this.setTime();
    }, 1000 * this.interval);
  },
  beforeDestroy() {
    this.timer && clearInterval(this.timer);
  },
};
</script>
