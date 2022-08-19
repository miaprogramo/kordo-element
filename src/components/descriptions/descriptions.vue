<script>
import { oneOf } from "../../utils/assist";
import config from "../../config";
const prefixCls = config.prefix + "descriptions";

export default {
  name: prefixCls,
  //   emits: ["close"],
  props: {
    // 标题文本，显示在左上方
    title: String,
    // 操作区文本，显示在右上方
    extra: String,
    // 每行 `Descriptions Item` 的数量
    column: {
      type: Number,
      default: 3,
    },
    // 排列的方向
    direction: {
      type: String,
      validator(value) {
        return oneOf(value, ["horizontal", "vertical"]);
      },
      default: "horizontal",
    },
    // 列表的尺寸
    size: {
      type: String,
      validator(value) {
        return oneOf(value, ["small", "default", "large", "huge"]);
      },
      default: "default",
    },
    // 分隔符
    separator: {
      type: String,
      default: "：",
    },
  },
  data() {
    return {
      prefixCls,
    };
  },
  computed: {
    classes() {
      let classes = [
        prefixCls,
        {
          [prefixCls + "--small"]: this.size === "small",
          [prefixCls + "--large"]: this.size === "large",
          [prefixCls + "--huge"]: this.size === "huge",
          ["is-vertical"]: this.direction === "vertical",
        },
      ];
      return classes;
    },
    styles() {
      let styles = {};
      return styles;
    },
  },
  methods: {
    formatBodyEls(h, items) {
      const tableClasses = [prefixCls + "__table"];
      items = this.sliceArray(items);
      return h("div", { class: prefixCls + "__body" }, [
        h("table", { class: tableClasses }, [
          h("tbody", {}, [
            items.map((child) => {
              return h("tr", {}, child);
            }),
          ]),
        ]),
      ]);
    },
    sliceArray(array) {
      let index = 0;
      let result = [];
      while (index < array.length) {
        result.push(array.slice(index, (index += this.column)));
      }
      return result;
    },
  },
  render(h) {
    let header = "";
    if (this.title || this.extra) {
      header = h("div", { class: prefixCls + "__header" }, [
        h("div", { class: prefixCls + "__title" }, this.title),
        h(
          "div",
          { class: prefixCls + "__extra" },
          this.$slots.extra || this.extra
        ),
      ]);
    }

    const items = this.$slots.default
      ? this.$slots.default.filter((child) => child.text !== " ")
      : [];
    const body = this.formatBodyEls(h, items);

    return h("div", { class: this.classes }, [header, body]);
  },
};
</script>
