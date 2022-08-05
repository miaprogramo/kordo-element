## 监听滚动：v-scroll

`v-scroll` 指令允许您在窗口、指定目标或元素本身（使用 `.self` 修饰符）滚动时提供回调。

:::demo

### Self 用法

`v-scroll` 的默认目标为 `window` 。

使用 `.self` 修饰符可以绑定元素本身。

```html
<template>
  <div class="header" :data-scrollTop="scrollTop">
    scrollTop
  </div>
  <div class="overflow" v-scroll.self="onScroll">
    <div v-height="1000"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        scrollTop: 0,
      };
    },
    methods: {
      onScroll(event) {
        this.scrollTop = event.target.scrollTop;
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

### Target 用法

为了更好地调整方法，您可以给指定目标绑定滚动事件监听器。

```html
<template>
  <div class="header" :data-scrollTop="scrollTop">
    scrollTop
  </div>
  <div class="overflow" id="scroll-target">
    <div v-height="1000" v-scroll:#scroll-target="onScroll"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        scrollTop: 0,
      };
    },
    methods: {
      onScroll(event) {
        this.scrollTop = event.target.scrollTop;
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

### v-scroll Params

| 参数     | 说明     | 类型            | 默认值 |
| -------- | -------- | --------------- | ------ |
| callback | 回调函数 | function(event) | -      |
