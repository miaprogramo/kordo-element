<template>
  <div class="home">
    <div class="header">
      <div class="title">Kordo Element</div>
    </div>
    <div class="page-content">
      <div class="sider">
        <Nav />
      </div>
      <div class="doc-content">
        <Demo v-if="source" :source="source" />
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/nav";
import Demo from "@/components/demo";
import * as docs from "@/docs";

export default {
  components: { Nav, Demo },
  data() {
    return {
      source: null,
    };
  },
  watch: {
    "$route.path": {
      handler() {
        this.markdownChange();
      },
      immediate: true,
    },
  },
  methods: {
    markdownChange() {
      this.source = docs[this.$route.name];
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
<style lang="less" scoped>
@primary-color: #409eff;
.home {
  position: relative;
}
.header {
  position: fixed;
  width: 100%;
  max-width: 1200px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
  border-bottom: 1px solid #dcdfe6;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;
  .title {
    color: @primary-color;
    font-size: 28px;
    font-weight: 700;
    line-height: 60px;
  }
}
.page-content {
  margin: auto;
  margin-top: 60px;
  max-width: 1200px;
}
.sider {
  position: fixed;
  width: 240px;
  top: 60px;
  bottom: 0;
  border-right: 1px solid #dcdfe6;
  background-color: #fff;
  box-sizing: border-box;
}
.doc-content {
  margin-left: 240px;
}
</style>
