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

### 基础用法

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

:::demo

### Affix Attributes

| 属性          | 说明                                    | 类型    | 默认值 |
| ------------- | --------------------------------------- | ------- | ------ |
| offset-top    | 距离窗口顶部达到指定偏移量后触发        | number  | 0      |
| offset-bottom | 自动倒计时间隔，单位：毫秒              | number  | -      |
| use-capture   | addEventListener 原生的 useCapture 选项 | boolean | false  |
| z-index       | css属性z-index                          | number  | 100    |

### Affix Events

| 事件名 | 说明                     | 返回值 |
| ------ | ------------------------ | ------ |
| change | 在固定状态发生改变时触发 | fixed  |

### Affix Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 默认插槽内容 |
