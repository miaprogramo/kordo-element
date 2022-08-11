<template>
  <div class="markdown">
    <VueMarkdown :source="source" />
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "markdown",
  props: ["source"],
  components: { VueMarkdown },
  data() {
    return {};
  },
};
</script>
<style lang="less">
@primary-color: #409eff;
@code-color: #e6effb;
@border-color: #ebebeb;

.markdown {
  h2 {
    font-size: 28px;
  }
  h3 {
    margin: 55px 0 20px;
    font-size: 22px;
  }
  h4 {
    font-size: 16px;
  }
  h2,
  h3,
  h4 {
    color: #606266;
    font-weight: 600;
  }
  code {
    padding: 1px 5px;
    background-color: @code-color;
    border-radius: 3px;
  }
  p,
  ul li {
    color: #5e6d82;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
  }
  pre {
    code {
      padding: 1rem;
      color: #000;
      background-color: hsl(0, 0%, 98%);
      font-weight: 400;
      border-radius: 0;
    }
  }
  a {
    color: @primary-color;
    text-decoration: none;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    padding: 15px;
    text-align: left;
  }
  tr {
    border-bottom: 1px solid @border-color;
  }
  td {
    padding: 15px;
  }
}
</style>
