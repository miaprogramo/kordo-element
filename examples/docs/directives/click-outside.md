## 元素外部点击指令：v-click-outside

`v-click-outside` 绑定一个函数，当目标元素以外的东西被点击时触发。

:::demo

### 用法

`v-click-outside` 指令允许您提供一个处理函数并且在用户点击目标元素之外时被调用。

```html
<template>
  <center>
    <el-button :type="type" @click="onClick" v-click-outside="onClickOutside">Button</el-button>
  </center>
</template>
<script>
  export default {
    data() {
      return {
        type: "default",
      };
    },
    methods: {
      onClick() {
        this.type = "success";
      },
      onClickOutside() {
        this.type = "default";
      },
    },
  };
</script>
```

:::demo

### v-click-outside Params

| 参数     | 说明     | 类型            | 默认值 |
| -------- | -------- | --------------- | ------ |
| callback | 回调函数 | function(event) | -      |
