## Space 间距

格式化数值的组件。

:::demo

### 基础用法

相邻组件水平间距。

```html
<template>
  <k-space>
    <el-button type="text">Text</el-button>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
  </k-space>
</template>
```

### 垂直布局

设置属性 `vertical` 后，可以使相邻组件垂直排列。
设置属性 `inline` 后，可以使元素变为行内元素。

```html
<template>
  <k-space vertical>
    <k-space vertical>
      <el-button v-width="'100%'">Default</el-button>
      <el-button v-width="'100%'">Default</el-button>
      <el-button v-width="'100%'">Default</el-button>
    </k-space>

    <strong>设置属性 inline</strong>

    <k-space vertical inline>
      <el-button v-width="'100%'">Default</el-button>
      <el-button v-width="'100%'">Default</el-button>
      <el-button v-width="'100%'">Default</el-button>
    </k-space>
  </k-space>
</template>
```

### 间距大小

通过调整 `size` 的值来控制间距的大小
通过 `size` 控制组件大小 `small`, `default`, `large`, 分别对应 `8px`, `12px`, `16px` 的间距. 默认的间距大小为 `small`，也就是 `8px`。
您也可以通过自定义的 `size` 来控制大小， 参见下一个部分。

```html
<template>
  <k-space vertical size="large">
    <el-radio-group v-model="size">
      <el-radio label="small">Small</el-radio>
      <el-radio label="default">Default</el-radio>
      <el-radio label="large">Large</el-radio>
    </el-radio-group>
    <k-space :size="size">
      <el-button type="text">Text</el-button>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
    </k-space>
    <el-slider v-model="customSize" />
    <k-space :size="customSize">
      <el-button type="text">Text</el-button>
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
    </k-space>
  </k-space>
</template>
<script>
  export default {
    data() {
      return {
        size: "small",
        customSize: 8,
      };
    },
  };
</script>
```

### 间隔符

设置属性 `spacer` 后，会设置相邻组件间隔符。

```html
<template>
  <k-space vertical>
    <k-space spacer="|">
      <el-button>Default</el-button>
      <el-button>Default</el-button>
      <el-button>Default</el-button>
    </k-space>

    <k-space>
      <template #spacer>-</template>
      <el-button>Default</el-button>
      <el-button>Default</el-button>
      <el-button>Default</el-button>
    </k-space>
  </k-space>
</template>
```

:::demo

### Space Attributes

| 属性     | 说明                                                                                                                                      | 类型                | 默认值     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | ---------- |
| size     | 间距大小，当类型为 `String` 时，可选值有：`small`、`large`、`default`；为数字时，是水平和垂直间距；为 `Array` 时，是 [水平间距, 垂直间距] | string,number,array | small      |
| vertical | 是否垂直布局                                                                                                                              | boolean             | false      |
| inline   | 是否为行内元素                                                                                                                            | boolean             | false      |
| align    | 垂直排列方式，可选值有 `stretch`、 `center`、 `flex-start`、 `flex-end`、 `baseline`                                                      | string              | stretch    |
| justify  | 水平排列方式，可选值有 `flex-start`、 `flex-end`、 `center`、 `space-between`、 `space-evenly`、 `space-around`                           | string              | flex-start |
| wrap     | 是否超出换行                                                                                                                              | boolean             | true       |
| spacer   | 间隔符                                                                                                                                    | string,number       | -          |

### Space Slots

| 名称    | 说明               |
| ------- | ------------------ |
| default | 需要添加间距的元素 |
| spacer  | 自定义间隔符       |
