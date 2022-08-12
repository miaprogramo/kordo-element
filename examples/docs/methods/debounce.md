## \$Debounce 防抖

创建一个防抖函数，该函数会从上一次被调用后，延迟 `wait` 毫秒后调用 `function` 方法。

:::demo

### 基础用法

设置 `options` 可以更改配置项。

```html
<template>
  <k-space align="center">
    <span>设置宽度：</span>
    <el-slider v-model="width" v-width="300" :min="200" :max="600" />
  </k-space>
  <div v-width="width" v-resize="$Debounce(handleResize,150, { leading: false })">
    <p>当宽度变化时，会触发事件</p>
    <p>当前宽度为：{{offsetWidth}}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        width: 200,
        offsetWidth: 0,
      };
    },
    methods: {
      handleResize(el) {
        this.offsetWidth = el.offsetWidth;
      },
    },
  };
</script>
```

:::demo

### \$Debounce Params

| 参数     | 说明           | 类型     | 默认值 |
| -------- | -------------- | -------- | ------ |
| function | 要防抖的函数   | function | -      |
| wait     | 需要延迟的毫秒 | number   | 0      |
| options  | 配置项         | object   | {}     |

### Options

| 参数     | 说明                 | 类型    | 默认值 |
| -------- | -------------------- | ------- | ------ |
| maxWait  | 允许被延迟的最大值   | number  | 0      |
| leading  | 指定在延迟开始前调用 | boolean | true   |
| trailing | 指定在延迟结束后调用 | boolean | true   |

### \$Debounce Methods

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| cancel | 取消延迟的函数调用 | 无   |
| flush  | 立即调用           | 无   |
