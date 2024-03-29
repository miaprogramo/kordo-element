## Affix 固钉

使用固钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。

:::demo

### 基础用法

简单使用，当元素不可见时，直接固定在最顶端。

```html
<template>
  <k-affix>
    <el-button type="primary">offset-top = 0</el-button>
  </k-affix>
</template>
```

### 偏移

当滚动到一定距离时再固定。

```html
<template>
  <k-affix :offset-top="50">
    <el-button type="primary">offset-top = 50</el-button>
  </k-affix>
</template>
```

### 固定在底部

在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。

注意，`offset-top`和`offset-bottom`只可以设置一个，如果都设置，会使用`offset-top`。

```html
<template>
  <k-affix :offset-bottom="50">
    <el-button type="primary">offset-bottom = 50</el-button>
  </k-affix>
</template>
```

### 指定容器

通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

```html
<template>
  <div ref="container" v-height="300" style="float: right">
    <k-affix :offset-top="60" :container="container">
      <el-button type="primary">offset-top = 60</el-button>
    </k-affix>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        container: null,
      };
    },
    mounted() {
      this.container = this.$refs.container;
    },
  };
</script>
```

### 固定状态改变时的回调

在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。

注意，`offset-top`和`offset-bottom`只可以设置一个，如果都设置，会使用`offset-top`。

```html
<template>
  <k-affix :offset-top="100" @change="change">
    <el-button type="primary">offset-top = 100</el-button>
  </k-affix>
</template>
<script>
  export default {
    methods: {
      change(isFixed) {
        this.$message.info(`isFixed: ${isFixed}`);
      },
    },
  };
</script>
```

:::demo

### Affix Attributes

| 属性          | 说明                                    | 类型    | 默认值 |
| ------------- | --------------------------------------- | ------- | ------ |
| offset-top    | 距离窗口顶部达到指定偏移量后触发        | number  | 0      |
| offset-bottom | 距离窗口底部达到指定偏移量后触发        | number  | -      |
| use-capture   | addEventListener 原生的 useCapture 选项 | boolean | false  |
| z-index       | css 属性 z-index                        | number  | -      |
| container     | 指定容器对应的 HTML 节点                | element | -      |

### Affix Events

| 事件名 | 说明                     | 返回值           |
| ------ | ------------------------ | ---------------- |
| change | 在固定状态发生改变时触发 | isFixed: boolean |

### Affix Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 默认插槽内容 |
