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
import { oneOf } from "../../utils/assist";
import config from "../../config";
const prefixCls = config.prefix + "ellipsis";

export default {
  name: prefixCls,
  components: { Tooltip },
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

    // 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果
    transfer: {
      type: Boolean,
      default: true,
    },
    // 主题，可选值为 dark 或 light
    theme: {
      type: String,
      validator(value) {
        return oneOf(value, ["dark", "light"]);
      },
      default: "dark",
    },
    // 最大宽度，超出最大值后，文本将自动换行，并两端对齐
    maxWidth: {
      type: [Number, String],
      default: 240,
    },
    // 提示框出现的位置，可选值为top、top-start、top-end、bottom、bottom-start、bottom-end、left、left-start、left-end、right、right-start、right-end
    placement: {
      type: String,
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
