## Descriptions 描述列表

文本过长自动处理省略号。

基于 `-webkit-line-clamp` 的多行省略。兼容性参见 [caniuse](https://caniuse.com/?search=line-clamp)。

:::demo

### 基础用法

设置属性 `line` 可以指定最大行数，超出这个行数的文本会自动截取。

```html
<template>
  <k-descriptions title="User Info" extra="ffe">
    <k-descriptions-item label="Username">kooriookami</k-descriptions-item>
    <k-descriptions-item label="Telephone">18100000000</k-descriptions-item>
    <k-descriptions-item label="Place">Suzhou</k-descriptions-item>
    <k-descriptions-item label="Remarks">
      <k-tag size="small">School</k-tag>
    </k-descriptions-item>
    <k-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</k-descriptions-item>
  </k-descriptions>
</template>
```

:::demo

### Descriptions Attributes

| 属性    | 说明             | 类型    | 默认值 |
| ------- | ---------------- | ------- | ------ |
| text    | 文本             | string  | -      |
| line    | 限制行数         | number  | -      |
| expand  | 是否开启点击展开 | boolean | false  |
| tooltip | 是否开启 tooltip | boolean | false  |

### Descriptions Attributes (tooltip=true)

| 属性      | 说明                                                                                                                                                                   | 类型           | 默认值 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------ |
| transfer  | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果                                            | boolean        | false  |
| theme     | 主题，可选值为 `dark` 或 `light`                                                                                                                                       | string         | dark   |
| max-width | 最大宽度，超出最大值后，文本将自动换行，并两端对齐                                                                                                                     | string, number | 240    |
| placement | 提示框出现的位置，可选值为`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`left`、`left-start`、`left-end`、`right`、`right-start`、`right-end` | string         | bottom |
