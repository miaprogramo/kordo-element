<template>
  <div v-if="isShow" :class="[prefixCls]" :style="styles">
    <div :class="[prefixCls + '_left-icon']">
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
    <div :class="[prefixCls + '_right-icon']">
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
import config from "../../config";
const prefixCls = config.prefix + "notice-bar";

export default {
  name: prefixCls,
  components: { Icon, NoticeBarVertical, NoticeBarHorizontal },
  props: {
    // 是否垂直滚动
    vertical: {
      type: Boolean,
      default: false,
    },
    // 宽度
    width: {
      type: Number,
      default: null,
    },
    // 高度
    height: {
      type: Number,
      default: 40,
    },
    // 文本颜色
    color: {
      type: String,
      default: "#409eff",
    },
    // 背景颜色
    background: {
      type: String,
      default: "#ecf5ff",
    },
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
      return {
        width: this.width ? this.width + "px" : "auto",
        height: this.height + "px",
        color: this.color,
        "background-color": this.background,
      };
    },
    contentClasses() {
      return [
        prefixCls + "-wrap",
        {
          [prefixCls + "-vertical"]: this.vertical,
          [prefixCls + "-horizontal"]: !this.vertical,
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
