<template>
  <div class="nav">
    <ul class="nav-container">
      <li class="nav-item">
        <div class="nav-item_title">指南</div>
        <ul
          class="pure-menu-list sub-nav"
          v-for="(item, index) in guides"
          :key="index"
        >
          <li :class="{ active: item.active }" @click="toPage(item.path)">
            {{ item.title }}
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <div class="nav-item_title">组件</div>
        <div class="nav-group" v-for="(item, index) in components" :key="index">
          <div class="nav-group_title">{{ item.title }}</div>
          <ul
            class="pure-menu-list"
            v-for="(child, i) in item.children"
            :key="i"
          >
            <li :class="{ active: child.active }" @click="toPage(child.path)">
              {{ child.title }}
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <div class="nav-item_title">方法</div>
        <ul
          class="pure-menu-list sub-nav"
          v-for="(item, index) in methods"
          :key="index"
        >
          <li :class="{ active: item.active }" @click="toPage(item.path)">
            {{ item.title }}
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <div class="nav-item_title">指令</div>
        <ul
          class="pure-menu-list sub-nav"
          v-for="(item, index) in directives"
          :key="index"
        >
          <li :class="{ active: item.active }" @click="toPage(item.path)">
            {{ item.title }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { guides, components, methods, directives } from "@/utils/navList";

export default {
  data() {
    return {
      guides,
      components,
      methods,
      directives,
    };
  },
  watch: {
    "$route.path": {
      handler() {
        this.navChange();
      },
      immediate: true,
    },
  },
  methods: {
    navChange() {
      this.guides.forEach((item) => {
        item.active = false;
        if (item.path === this.$route.path) {
          item.active = true;
        }
      });
      this.components.forEach((item, index) => {
        item.children.forEach((child) => {
          child.active = false;
          if (child.path === this.$route.path) {
            child.active = true;
          }
        });
        this.$set(this.components, index, item);
      });
      this.methods.forEach((item) => {
        item.active = false;
        if (item.path === this.$route.path) {
          item.active = true;
        }
      });
      this.directives.forEach((item) => {
        item.active = false;
        if (item.path === this.$route.path) {
          item.active = true;
        }
      });
    },
    toPage(path) {
      if (path != this.$route.path) {
        this.$router.push(path);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@primary-color: #409eff;

.nav {
  height: calc(~"100vh -  60px");
  overflow-y: scroll;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0003;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  &-container {
    padding: 40px 0 !important;
  }
  &-item {
    &:nth-of-type(1) {
      .nav-item_title {
        margin: 0;
      }
    }
    &_title {
      height: 40px;
      line-height: 40px;
      color: #333;
      font-size: 16px;
      font-weight: 700;
      margin-top: 15px;
    }
    .pure-menu-list {
      li {
        height: 40px;
        line-height: 40px;
        color: #444;
        font-size: 14px;
        cursor: pointer;
        &.active {
          color: @primary-color;
        }
      }
    }
    .nav-group_title {
      height: 26px;
      line-height: 26px;
      color: #999;
      font-size: 12px;
      margin-top: 15px;
    }
  }
}
/deep/.el-scrollbar__bar.is-vertical {
  opacity: 1;
}
/deep/.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
