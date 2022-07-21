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
    color: #1f2f3d;
    font-size: 28px;
    font-weight: 400;
  }
  h3 {
    margin: 55px 0 20px;
    color: #1f2f3d;
    font-size: 22px;
    font-weight: 400;
  }
  h4 {
    color: #1f2f3d;
    font-size: 16px;
    font-weight: 400;
  }
  code {
    padding: 1px 5px;
    background-color: @code-color;
    border-radius: 3px;
  }
  p {
    color: #5e6d82;
    font-size: 14px;
    line-height: 1.5;
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
