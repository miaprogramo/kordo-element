## 元素曝光：v-intersect

`v-intersect` 指令使用 [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)。 它提供了一个易于使用的接口，用于检测元素在用户视图中是否可见。

:::demo

### 用法

滚动窗口并观察彩色点。请注意，当 `Card` 出现时，它会从 error 变为 success。

```html
<template>
  <div class="circle" v-bg-color="isIntersecting ? 'green' : 'red'"></div>
  <div class="overflow">
    <div class="container">
      <el-card
        v-margin="'800px auto 0'"
        v-width="300"
        v-intersect="{
            callback: onIntersect,
            options:{
              threshold: [0, 0.5, 1.0]
            }
          }"
      >
        <div slot="header">
          <span>卡片名称</span>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isIntersecting: false,
      };
    },
    methods: {
      onIntersect(entries) {
        this.isIntersecting = entries[0].isIntersecting;
      },
    },
  };
</script>
<style>
  .circle {
    margin: 12px auto;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .overflow {
    height: 400px;
    overflow-y: scroll;
  }
  .container {
    height: 1000px;
  }
</style>
```

:::demo

### v-intersect Params

| 参数     | 说明                                                         | 类型     | 默认值 |
| -------- | ------------------------------------------------------------ | -------- | ------ |
| callback | 回调函数                                                     | function | -      |
| options  | 可用的选项可以在 [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 中找到 | object   | {}     |
