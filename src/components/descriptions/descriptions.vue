<script>
import { oneOf } from "../../utils/assist";
import config from "../../config";
import { chdir } from "process";
const prefixCls = config.prefix + "descriptions";

export default {
  name: prefixCls,
  //   emits: ["close"],
  props: {
    // 标题文本，显示在左上方
    title: String,
    // 操作区文本，显示在右上方
    extra: String,
    // 设置的总列数
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
        return oneOf(value, ["small", "default", "large"]);
      },
      default: "default",
    },
    // 是否带有边框
    border: {
      type: Boolean,
      default: false,
    },
    // 分隔符，border　为 false　时生效
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
    formatTableEls(h, items) {
      const tableClasses = [prefixCls + "__table", "is-border"];
      items = this.sliceArray(items);
      return h("div", { class: prefixCls + "__body" }, [
        h("table", { class: tableClasses }, [
          h("tbody", {}, [
            items.map((child) => {
              console.log(child[0]);
              console.log(child[0].data);
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
    let body;
    if (this.border) {
      body = this.formatTableEls(h, items);
    } else {
      body = this.formatBodyEls(h, items);
    }
    // console.log(this.chunk(items, 2));
    // this.formatTrTd(items);
    // const len = items.length;

    return h("div", { class: this.classes }, [header, body]);
  },
};
</script>
