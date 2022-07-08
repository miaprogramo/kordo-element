<template>
  <div class="demo">
    <div class="header">
      <markdown :source="header" />
    </div>
    <div class="content" v-for="(item, index) in content" :key="index">
      <markdown :source="item.text" />
      <div class="demo-block">
        <code-viewer ref="code-viewer" :source="item.code" />
        <div class="op-btns">
          <el-tooltip content="复制代码">
            <k-icon name="copy" @click="handleCopy(item)" />
          </el-tooltip>
          <el-tooltip content="查看代码">
            <k-icon name="code" @click="item.show = !item.show" />
          </el-tooltip>
        </div>
        <el-collapse-transition>
          <div class="code" v-show="item.show">
            <markdown :source="item.md" />
          </div>
        </el-collapse-transition>
      </div>
    </div>
    <div class="apis">
      <markdown v-for="(item, index) in apis" :key="index" :source="item" />
    </div>
  </div>
</template>

<script>
import markdown from "../markdown";
import hljs from "highlight.js";

export default {
  name: "Demo",
  props: ["source"],
  components: { markdown },
  data() {
    return {
      header: "",
      content: [],
      apis: [],
      show: false,
    };
  },
  watch: {
    source: {
      handler(source) {
        this.header = {};
        this.content = [];
        this.apis = [];
        if (source) {
          this.formatMarkdown(source);
          this.$nextTick(() => {
            hljs.highlightAll();
            this.content.forEach((item, index) => {
              this.$refs["code-viewer"][index].code = item.code;
            });
          });
        }
      },
      immediate: true,
    },
  },
  methods: {
    handleCopy(item) {
      this.$Copy({
        text: item.code,
      });
    },
    formatMarkdown(source) {
      if (source.includes(":::demo")) {
        let demos = source.split(":::demo");
        // header
        this.header = demos[0];

        // content
        let content = demos[1].split("###");
        content.shift();
        this.content = content.map((item) => {
          return {
            text: "###" + item.split("```html")[0],
            md: ("```html/n" + item.split("```html")[1]).trim(),
            code: item
              .split("```html")[1]
              .replace("```", "")
              .trim(),
            show: false,
          };
        });

        // apis
        if (demos.length === 3) {
          let apis = demos[2].split("###");
          apis.shift();
          this.apis = apis.map((item) => {
            return "###" + item;
          });
        }
      } else {
        this.header = source;
      }
    },
  },
};
</script>
<style lang="less" scoped>
@border-color: #ebebeb;
.demo {
  width: 100%;
  padding: 30px 30px 50px 30px;
  box-sizing: border-box;
}
/deep/.content {
  .demo-block {
    border: 1px solid @border-color;
    border-radius: 3px;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 60%),
        0 2px 4px 0 rgba(232, 237, 250, 50%);
    }
    .op-btns {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 44px;
      border-top: 1px solid @border-color;
      .k-icon {
        margin-right: 24px;
        color: #808695;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }
}
/deep/.vue-repl {
  border: none;
  overflow: visible;
  &:hover {
    box-shadow: none;
  }
  .vertical {
    .left {
      border-bottom: none !important;
    }
    .dragger {
      display: none;
    }
  }
  .output-header {
    display: none;
  }
  .output-container {
    overflow: visible;
  }
  .output-container-ttt {
    padding: 24px;
    height: auto;
    min-height: 40px;
  }
  .test1 {
    transform: none !important;
  }
}
</style>
