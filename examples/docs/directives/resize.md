## 监听尺寸变化指令：v-resize

`v-resize` 绑定一个函数，当该元素宽度/高度发生变化时触发。

:::demo

### 基础用法

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

### Throttle 用法

使用 `throttle` 修饰符可以节流 `150` 毫秒。

想使用更多节流功能请使用 `$Throttle` 方法。

```html
<template>
  <div v-resize.throttle="handleResize">
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

:::demo

### v-resize Params

| 参数     | 说明     | 类型              | 默认值 |
| -------- | -------- | ----------------- | ------ |
| callback | 回调函数 | function(element) | -      |
