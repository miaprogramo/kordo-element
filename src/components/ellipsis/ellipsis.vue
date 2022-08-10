<template>
  <div :class="prefixCls">
    <span v-if="expand" :class="classes" :style="styles" @click="expandText">
      <slot>{{ text }}</slot></span
    >
    <Tooltip
      v-else-if="tooltip"
      :content="text"
      :theme="theme"
      :max-width="maxWidth"
      :placement="placement"
      :transfer="transfer"
    >
      <span :class="classes" :style="styles">{{ text }}</span>
    </Tooltip>
    <span v-else :class="classes" :style="styles">
      <slot>{{ text }}</slot></span
    >
  </div>
</template>
<script>
import Tooltip from "../tooltip/tooltip.vue";
import lineClamp from "../../directives/line-clamp";
import { oneOf } from "../../utils/assist";
import config from "../../config";
const prefixCls = config.prefix + "ellipsis";

export default {
  name: prefixCls,
  components: { Tooltip },
  directives: { lineClamp },
  props: {
    // 文本
    text: {
      type: String,
      default: "",
    },
    // 限制行数
    line: {
      type: Number,
      default: 1,
    },
    // 是否开启点击展开
    expand: {
      type: Boolean,
      default: false,
    },
    // 是否开启 tooltip
    tooltip: {
      type: Boolean,
      default: true,
    },
    // 以下是 tooltip 部分选项
    transfer: {
      type: Boolean,
      default: true,
    },
    theme: {
      validator(value) {
        return oneOf(value, ["dark", "light"]);
      },
      default: "dark",
    },
    maxWidth: {
      type: [String, Number],
      default: 240,
    },
    placement: {
      validator(value) {
        return oneOf(value, [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "left",
          "left-start",
          "left-end",
          "right",
          "right-start",
          "right-end",
        ]);
      },
      default: "bottom",
    },
  },
  data() {
    return {
      prefixCls,
      hiddren: true,
    };
  },
  computed: {
    classes() {
      return [
        prefixCls,
        {
          ["is-expand"]: this.expand,
          [prefixCls + "__line-clamp"]: this.hiddren,
        },
      ];
    },
    styles() {
      let styles = {};
      if (this.hiddren) styles["-webkit-line-clamp"] = this.line;
      return styles;
    },
  },
  methods: {
    expandText() {
      this.hiddren = !this.hiddren;
    },
  },
};
</script>
