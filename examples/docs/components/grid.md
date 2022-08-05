## Grid 宫格

宫格可以在水平方向上把页面分隔成等宽度的区块，用于展示内容或进行页面导航。

:::demo

### 基础用法

宫格共包含两个组件：`Grid` 和 `GridItem`。

设置 Grid 属性 `col` 可以指定最大支持的列数。

宫格每行高度相同。

```html
<template>
  <k-grid :col="4" :gutter="10">
    <k-grid-item>1</k-grid-item>
    <k-grid-item>2</k-grid-item>
    <k-grid-item>3</k-grid-item>
    <k-grid-item>4</k-grid-item>
    <k-grid-item>5</k-grid-item>
    <k-grid-item>6</k-grid-item>
    <k-grid-item>7</k-grid-item>
    <k-grid-item>8</k-grid-item>
  </k-grid>
</template>
```

### 宽高一致

设置属性 `square` 为 `true`，宫格的高度会与宽度一致，并会自动适应窗口的改变。

```html
<template>
  <k-grid square>
    <k-grid-item>1</k-grid-item>
    <k-grid-item>2</k-grid-item>
    <k-grid-item>3</k-grid-item>
    <k-grid-item>4</k-grid-item>
    <k-grid-item>5</k-grid-item>
    <k-grid-item>6</k-grid-item>
  </k-grid>
</template>
```

### 内容居中

设置属性 `center` 为 `true`，宫格的内容将水平垂直居中显示。

```html
<template>
  <k-grid center square>
    <k-grid-item>1</k-grid-item>
    <k-grid-item>2</k-grid-item>
    <k-grid-item>3</k-grid-item>
  </k-grid>
</template>
```

### 是否显示边框

设置属性 `border` 可以控制是否显示边框，默认为 `true`。

```html
<template>
  <div>
    显示边框：<el-switch v-model="border" />
    <k-grid :border="border">
      <k-grid-item>1</k-grid-item>
      <k-grid-item>2</k-grid-item>
      <k-grid-item>3</k-grid-item>
      <k-grid-item>4</k-grid-item>
      <k-grid-item>5</k-grid-item>
      <k-grid-item>6</k-grid-item>
    </k-grid>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        border: true,
      };
    },
  };
</script>
<style>
  .k-grid {
    margin: 12px;
  }
</style>
```

### 悬停效果

设置属性 `hover` 为 `true` 可以开启鼠标悬停时的效果，会有一个浮起的阴影。

```html
<<template>
  <div>
    显示边框：<el-switch v-model="border" /> 开启悬停：<el-switch v-model="hover" />
    <k-grid :border="border" :hover="hover">
      <k-grid-item>1</k-grid-item>
      <k-grid-item>2</k-grid-item>
      <k-grid-item>3</k-grid-item>
      <k-grid-item>4</k-grid-item>
      <k-grid-item>5</k-grid-item>
      <k-grid-item>6</k-grid-item>
      <k-grid-item>7</k-grid-item>
      <k-grid-item>8</k-grid-item>
      <k-grid-item>9</k-grid-item>
    </k-grid>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        border: true,
        hover: true,
      };
    },
  };
</script>
<style>
  .k-grid {
    margin: 12px;
  }
</style>
```

:::demo

### Grid Attributes

| 属性    | 说明                      | 类型          | 默认值 |
| ------- | ------------------------- | ------------- | ------ |
| col     | 最大支持的列数            | number        | 3      |
| square  | 是否宽高一致              | boolean       | false  |
| padding | 内容的间距，默认单位为 px | number,string | 24     |
| center  | 内容是否居中              | boolean       | false  |
| border  | 是否显示边框              | boolean       | true   |
| hover   | 是否开启鼠标悬停效果      | boolean       | false  |

### GridItem Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 默认插槽内容 |
