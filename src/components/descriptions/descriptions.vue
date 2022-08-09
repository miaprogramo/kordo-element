<!-- <template>
  <div :class="prefixCls">
    <div v-if="title || extra" :class="prefixCls + '_header'">
      <div v-if="title" :class="prefixCls + '_title'">{{ title }}</div>
      <div v-if="extra" :class="prefixCls + '_extra'">{{ extra }}</div>
    </div>
    <table :class="prefixCls + '_body'">
      <tbody>
        <tr></tr>
      </tbody>
    </table>
  </div>
</template> -->
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
      let els = [];
      items = this.sliceArray(items);
      console.log("items", items);
      return h("table", { class: prefixCls + "_body" }, [
        h("tbody", {}, [
          items.map((tr) => {
            return h(
              "tr",
              {},
              tr.map((td) => {
                return h("td", {}, [td]);
              })
            );
          }),
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
      header = h("div", { class: prefixCls + "_header" }, [
        h("div", { class: prefixCls + "_title" }, this.title),
        h("div", { class: prefixCls + "_extra" }, this.extra),
      ]);
    }

    const items = this.$slots.default
      ? this.$slots.default.filter((child) => child.text !== " ")
      : [];
    const body = this.formatBodyEls(h, items);
    // console.log(this.chunk(items, 2));
    // this.formatTrTd(items);
    // const len = items.length;

    return h("div", { class: prefixCls }, [header, body]);
  },
};
</script>
