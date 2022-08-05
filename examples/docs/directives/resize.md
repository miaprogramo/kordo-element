## 监听尺寸变化指令：v-resize

`v-resize` 绑定一个函数，当该元素宽度/高度发生变化时触发。

:::demo

### 用法

可以给任何元素、组件使用。

```html
<template>
  <div v-resize="handleResize">
    <p>当宽度变化时，会触发事件</p>
    <p>当前宽度为：{{width}}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        width: 0,
      };
    },
    methods: {
      handleResize(el) {
        this.width = el.offsetWidth;
      },
    },
  };
</script>
```
