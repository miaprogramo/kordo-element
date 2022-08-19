## Descriptions 描述列表

成组展示多个只读字段，常见于详情页的信息展示。

:::demo

### 基础用法

简单的列出信息。

```html
<template>
  <k-descriptions title="User Info" :labelWidth="100">
    <k-descriptions-item label="Username">GGS</k-descriptions-item>
    <k-descriptions-item label="Telephone">13200000000</k-descriptions-item>
    <k-descriptions-item label="Place">China</k-descriptions-item>
    <k-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </k-descriptions-item>
    <k-descriptions-item label="Address">
      No. 23, Sanhua Road, Fanhu Economic Development Zone, Leping Town, Sanshui District, Foshan City, China
    </k-descriptions-item>
  </k-descriptions>
</template>
```

### 设置总列数

通过 `column` 属性可以设置总列数。

```html
<template>
  <k-descriptions title="User Info" :column="4">
    <k-descriptions-item label="Username">GGS</k-descriptions-item>
    <k-descriptions-item label="Telephone">13200000000</k-descriptions-item>
    <k-descriptions-item label="Place">China</k-descriptions-item>
    <k-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </k-descriptions-item>
    <k-descriptions-item label="Address">
      No. 23, Sanhua Road, Fanhu Economic Development Zone, Leping Town, Sanshui District, Foshan City, China
    </k-descriptions-item>
  </k-descriptions>
</template>
```

### 尺寸大小

通过调整 `size` 的值来控制尺寸大小。

通过 `size` 控制组件大小，可选值有：`small`, `default`, `large`, `huge`。

```html
<template>
  <k-space vertical size="default">
    <el-radio-group v-model="size">
      <el-radio label="small">Small</el-radio>
      <el-radio label="default">Default</el-radio>
      <el-radio label="large">Large</el-radio>
      <el-radio label="huge">Huge</el-radio>
    </el-radio-group>
    <k-descriptions title="User Info" :size="size">
      <template #extra>
        <el-button type="primary">Operation</el-button>
      </template>
      <k-descriptions-item label="Username">GGS</k-descriptions-item>
      <k-descriptions-item label="Telephone">13200000000</k-descriptions-item>
      <k-descriptions-item label="Place">China</k-descriptions-item>
      <k-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </k-descriptions-item>
      <k-descriptions-item label="Address">
        No. 23, Sanhua Road, Fanhu Economic Development Zone, Leping Town, Sanshui District, Foshan City, China
      </k-descriptions-item>
    </k-descriptions>
  </k-space>
</template>
<script>
  export default {
    data() {
      return {
        size: "default",
      };
    },
  };
</script>
```

### 垂直列表

设置属性 `direction` 为 `vertical`，可以垂直布局。

```html
<template>
  <k-space vertical size="default">
    <el-radio-group v-model="size">
      <el-radio label="small">Small</el-radio>
      <el-radio label="default">Default</el-radio>
      <el-radio label="large">Large</el-radio>
      <el-radio label="huge">Huge</el-radio>
    </el-radio-group>
    <k-descriptions title="User Info" :size="size" direction="vertical">
      <template #extra>
        <el-button type="primary">Operation</el-button>
      </template>
      <k-descriptions-item label="Username">GGS</k-descriptions-item>
      <k-descriptions-item label="Telephone">13200000000</k-descriptions-item>
      <k-descriptions-item label="Place">China</k-descriptions-item>
      <k-descriptions-item label="Remarks">
        <el-tag size="small">School</el-tag>
      </k-descriptions-item>
      <k-descriptions-item label="Address">
        No. 23, Sanhua Road, Fanhu Economic Development Zone, Leping Town, Sanshui District, Foshan City, China
      </k-descriptions-item>
    </k-descriptions>
  </k-space>
</template>
<script>
  export default {
    data() {
      return {
        size: "default",
      };
    },
  };
</script>
```

:::demo

### Descriptions Attributes

| 属性      | 说明                                                       | 类型   | 默认值     |
| --------- | ---------------------------------------------------------- | ------ | ---------- |
| title     | 标题文本，显示在左上方                                     | string | -          |
| extra     | 操作区文本，显示在右上方                                   | string | -          |
| column    | 每行 `Descriptions Item` 的数量                            | number | 3          |
| direction | 排列的方向，可选值有 `horizontal` 和 `vertical`            | string | horizontal |
| size      | 尺寸大小，可选值有：`small`、`default`、`large`、 `huge`。 | string | default    |
| separator | 分隔符                                                     | string | ：         |

### DescriptionsItem Attributes

| 属性      | 说明                                                                                                            | 类型            | 默认值 |
| --------- | --------------------------------------------------------------------------------------------------------------- | --------------- | ------ |
| label     | 标签文本                                                                                                        | string          | -      |
| span      | 列的数量                                                                                                        | number          | 1      |
| width     | 列的宽度，不同行相同列的宽度按最大值设定                                                                        | number / string | -      |
| min-width | 列的最小宽度，与 `width` 的区别是 `width` 是固定的，`min-width` 会把剩余宽度按比例分配给设置了 `min-width` 的列 | number / string | -      |

### DescriptionsItem Slots

| **名称**  | 说明           |
| --------- | -------------- |
| default   | 文本内容       |
| label     | 自定义标签文本 |
| separator | 自定义分隔符   |
