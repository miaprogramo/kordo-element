<script>
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
    // 设置的总列数
    column: {
      type: Number,
      default: 3,
    },
    // 设置的总列数
    border: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      prefixCls,
    };
  },
  computed: {
    classes() {
      return [prefixCls];
    },
    styles() {
      let styles = {};
      return styles;
    },
  },
  methods: {
    formatBodyEls(h, items) {
      const tableClasses = [
        prefixCls + "__table",
        {
          "is-border": this.border,
        },
      ];
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
        h("div", { class: prefixCls + "__extra" }, this.extra),
      ]);
    }

    const items = this.$slots.default
      ? this.$slots.default.filter((child) => child.text !== " ")
      : [];
    const body = this.formatBodyEls(h, items);
    // console.log(this.chunk(items, 2));
    // this.formatTrTd(items);
    // const len = items.length;

    return h("div", { class: this.classes }, [header, body]);
  },
};
</script>
