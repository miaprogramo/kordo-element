## Ellipsis 文本省略

文本过长自动处理省略号。

基于 `-webkit-line-clamp` 的多行省略。兼容性参见 [caniuse](https://caniuse.com/?search=line-clamp)。

:::demo

### 基础用法

设置属性 `line` 可以指定最大行数，超出这个行数的文本会自动截取。

```html
<template>
  <div>
    <k-ellipsis :text="text" :line="2" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text:
          "一个黑暗森林中的猎手……突然看到……所有猎手都能认出的字标示出的森林中的一个位置……假设林中有一百万个猎手（在银河系数千亿颗恒星中存在的文明数量可能千百倍于此），可能有九十万个对这个标示不予理会；在剩下的十万个猎手中，可能有九万个对那个位置进行探测，证实其没有生物后也不予理会；那么在最后剩下的一万个猎手中，肯定有人会做出这样的选择：向那个位置开一枪试试，因为对技术发展到某种程度的文明来说，攻击可能比探测省力，也比探测安全，如果那个位置真的什么都没有，自己也没什么损失。",
      };
    },
  };
</script>
```

### 点击展开

设置属性 `expand` 可以在点击时展开显示完整的内容。

```html
<template>
  <div>
    <k-ellipsis :text="text" :line="2" expand />
  <div>
</template>
<script>
  export default {
    data() {
      return {
        text:
          "一个黑暗森林中的猎手……突然看到……所有猎手都能认出的字标示出的森林中的一个位置……假设林中有一百万个猎手（在银河系数千亿颗恒星中存在的文明数量可能千百倍于此），可能有九十万个对这个标示不予理会；在剩下的十万个猎手中，可能有九万个对那个位置进行探测，证实其没有生物后也不予理会；那么在最后剩下的一万个猎手中，肯定有人会做出这样的选择：向那个位置开一枪试试，因为对技术发展到某种程度的文明来说，攻击可能比探测省力，也比探测安全，如果那个位置真的什么都没有，自己也没什么损失。",
      };
    },
  };
</script>
```

### 使用 Tooltip

设置属性 `tooltip` 可以以文本提示的形式显示完整的内容。

```html
<template>
  <div>
    <k-ellipsis :text="text" :line="2" tooltip transfer />

    <p><strong>light主题</strong></p>

    <k-ellipsis :text="text" :line="2" tooltip transfer theme="light" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        text:
          "一个黑暗森林中的猎手……突然看到……所有猎手都能认出的字标示出的森林中的一个位置……假设林中有一百万个猎手（在银河系数千亿颗恒星中存在的文明数量可能千百倍于此），可能有九十万个对这个标示不予理会；在剩下的十万个猎手中，可能有九万个对那个位置进行探测，证实其没有生物后也不予理会；那么在最后剩下的一万个猎手中，肯定有人会做出这样的选择：向那个位置开一枪试试，因为对技术发展到某种程度的文明来说，攻击可能比探测省力，也比探测安全，如果那个位置真的什么都没有，自己也没什么损失。",
      };
    },
  };
</script>
```

:::demo

### Ellipsis Attributes

| 属性    | 说明             | 类型    | 默认值 |
| ------- | ---------------- | ------- | ------ |
| text    | 文本             | string  | -      |
| line    | 限制行数         | number  | -      |
| expand  | 是否开启点击展开 | boolean | false  |
| tooltip | 是否开启 tooltip | boolean | false  |

### Ellipsis Attributes (tooltip=true)

| 属性      | 说明                                                                                                                                                                   | 类型           | 默认值 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------ |
| transfer  | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果                                            | boolean        | false  |
| theme     | 主题，可选值为 `dark` 或 `light`                                                                                                                                       | string         | dark   |
| max-width | 最大宽度，超出最大值后，文本将自动换行，并两端对齐                                                                                                                     | string, number | 240    |
| placement | 提示框出现的位置，可选值为`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`left`、`left-start`、`left-end`、`right`、`right-start`、`right-end` | string         | bottom |
