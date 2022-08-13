## \$Throttle 节流

创建一个节流函数，在 `wait` 秒内最多执行 `function` 一次的函数。

:::demo

### 基础用法

设置 `options` 可以更改配置项。

```html
<template>
  <k-space align="center">
    需要节流的毫秒：
    <el-input-number v-model="wait"></el-input-number>
    <el-button type="primary" @click="handleFlush">立即调用</el-button>
  </k-space>
  <div class="header" :data-scrollTop="scrollTop">
    scrollTop
  </div>
  <div class="overflow" ref="overflow" v-scroll.self="$Throttle(handleScroll, wait)">
    <div v-height="1000"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        scrollTop: 0,
        wait: 150,
        throttle: null,
      };
    },
    methods: {
      handleScroll(event) {
        this.scrollTop = event.target.scrollTop;
      },
      handleFlush() {
        this.throttle && this.throttle.flush();
      },
    },
  };
</script>
<style>
  .header {
    margin: 12px auto;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    position: relative;
  }
  .header::after {
    content: attr(data-scrollTop);
    position: absolute;
    margin-left: 12px;
  }
  .overflow {
    height: 400px;
    overflow-y: scroll;
  }
</style>
```

:::demo

### \$Throttle Params

| 参数     | 说明           | 类型     | 默认值 |
| -------- | -------------- | -------- | ------ |
| function | 要节流的函数   | function | -      |
| wait     | 需要节流的毫秒 | number   | 0      |
| options  | 配置项         | object   | {}     |

### Options

| 参数     | 说明                 | 类型    | 默认值 |
| -------- | -------------------- | ------- | ------ |
| leading  | 指定调用在节流开始前 | boolean | true   |
| trailing | 指定调用在节流结束后 | boolean | true   |

### \$Throttle Methods

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| cancel | 取消延迟的函数调用 | 无   |
| flush  | 立即调用           | 无   |
