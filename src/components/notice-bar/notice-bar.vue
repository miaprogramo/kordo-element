<template>
  <div v-if="isShow" :class="[prefixCls]" :style="styles">
    <div :class="[prefixCls + '__left-icon']">
      <slot name="left-icon">
        <Icon name="volume-notice" />
      </slot>
    </div>
    <div :class="contentClasses" :style="{ height: styles.height }">
      <notice-bar-vertical v-if="vertical">
        <slot></slot>
      </notice-bar-vertical>
      <notice-bar-horizontal v-else>
        <slot></slot>
      </notice-bar-horizontal>
    </div>
    <div :class="[prefixCls + '__right-icon']">
      <slot name="right-icon" v-if="closable">
        <Icon name="close-small" @click="close" />
      </slot>
    </div>
  </div>
</template>
<script>
import Icon from "../icon/icon";
import NoticeBarVertical from "./notice-bar-vertical";
import NoticeBarHorizontal from "./notice-bar-horizontal";
import { oneOf } from "../../utils/assist";
import config from "../../config";
const prefixCls = config.prefix + "notice-bar";

export default {
  name: prefixCls,
  components: { Icon, NoticeBarVertical, NoticeBarHorizontal },
  emits: ["close"],
  props: {
    // 是否垂直滚动
    vertical: {
      type: Boolean,
      default: false,
    },
    // 宽度
    width: [Number, String],
    // 高度
    height: {
      type: [Number, String],
      default: 40,
    },
    // 文本颜色
    color: String,
    // 背景颜色
    background: String,
    // 是否开启关闭按钮
    closable: {
      type: Boolean,
      default: false,
    },
    /* horizontal */
    scrollable: {
      // 是否开启滚动播放
      type: Boolean,
      default: false,
    },
    speed: {
      // 滚动速率 (px/s)
      type: Number,
      default: 60,
    },
    /* vertical */
    // 切换方向，可选值为 up 或 down
    direction: {
      type: String,
      validator(value) {
        return oneOf(value, ["up", "down"]);
      },
      default: "up",
    },
    // 切换动画时间 (ms)
    duration: {
      type: Number,
      default: 1000,
    },
    // 停留时间 (ms)
    interval: {
      type: Number,
      default: 2000,
    },
  },
  data() {
    return {
      prefixCls,
      isShow: true,
    };
  },
  computed: {
    styles() {
      let styles = {
        height:
          typeof this.height === "number" ? this.height + "px" : this.height,
      };
      if (this.width)
        styles.width =
          typeof this.width === "number" ? this.width + "px" : this.width;
      if (this.color) styles.color = this.color;
      if (this.background) styles.backgroundColor = this.background;

      return styles;
    },
    contentClasses() {
      return [
        prefixCls + "__wrap",
        {
          ["is-vertical"]: this.vertical,
          ["is-horizontal"]: !this.vertical,
        },
      ];
    },
  },
  methods: {
    close() {
      this.isShow = false;
      this.$emit("close");
    },
  },
};
</script>
