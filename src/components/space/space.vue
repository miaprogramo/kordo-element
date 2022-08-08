<script>
import config from "../../config";
const prefixCls = config.prefix + "space";

export default {
  name: prefixCls,
  props: {
    // 间距大小，当类型为 String 时，可选值有：small、large、default；为数字时，是水平和垂直间距；为 Array 时，是 [水平间距, 垂直间距]
    size: {
      type: [String, Number, Array],
      default: "small",
    },
    // 是否垂直布局
    vertical: {
      type: Boolean,
      default: false,
    },
    // 是否为行内元素
    inline: {
      type: Boolean,
      default: false,
    },
    // 垂直排列方式
    align: {
      type: String,
      default: "stretch",
    },
    // 水平排列方式
    justify: {
      type: String,
      default: "flex-start",
    },
    // 是否超出换行
    wrap: {
      type: Boolean,
      default: true,
    },
    // 间隔符
    spacer: {
      type: [String, Number],
    },
  },
  data() {
    return {};
  },
  computed: {
    classes() {
      let classes = [prefixCls];
      if (this.vertical) classes.push(prefixCls + "_vertical");
      return classes;
    },
    styles() {
      let styles = {};
      if (typeof this.size === "string") {
        if (this.size === "small") styles["gap"] = "8px 8px";
        if (this.size === "default") styles["gap"] = "12px 12px";
        if (this.size === "large") styles["gap"] = "16px 16px";
      } else if (typeof this.size === "number") {
        styles["gap"] = this.size + "px " + this.size + "px";
      } else if (Array.isArray(this.size)) {
        styles["gap"] = this.size[0] + "px " + this.size[1] + "px";
      }

      if (this.wrap) styles["flex-wrap"] = "wrap";

      if (this.inline) styles["display"] = "inline-flex";

      styles["align-items"] = this.align;
      styles["justify-content"] = this.justify;

      return styles;
    },
  },
  render(h) {
    const items = this.$slots.default.filter((child) => child.text !== " ");
    const len = items.length;
    const spacer = this.$slots.spacer || this.spacer;

    return h(
      "div",
      { class: this.classes, style: this.styles },
      items.map((child, index) => {
        const item = h("div", { class: prefixCls + "-item" }, [child]);

        if (spacer && index + 1 < len) {
          return [item, h("div", { class: prefixCls + "_spacer" }, [spacer])];
        }

        return item;
      })
    );
  },
};
</script>
