## Ellipsis 文本省略

文本过长自动处理省略号，支持按照文本长度、最大行数、限制高度三种方式截取。

:::demo

### 按照字符数省略

设置属性 `length` 可以按照指定长度省略。

设置属性 `tooltip` 可以以文本提示的形式显示完整的内容。

```html
<template>
  <div>
    <k-ellipsis :text="text" :length="100" />

    <p><strong>显示 Tooltip</strong></p>

    <k-ellipsis :text="text" :length="100" tooltip transfer />
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

### 按照高度省略

设置属性 `height` 可以按照指定高度省略。

```html
<template>
  <div>
    <k-ellipsis :text="text" :height="80" tooltip transfer />
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

### 按照行数省略

设置属性 `lines` 可以指定最大行数，超出这个行数的文本会自动截取。

另一种按照行数省略的方法是使用自定义指令 `v-line-clamp`，它是 CSS 级别的处理，具有更高的性能，但只适用于 Webkit 内核浏览器，详见指令一栏。

```html
<template>
  <div>
    <k-ellipsis :text="text" :lines="3" tooltip transfer />

    <p><strong>light主题</strong></p>

    <k-ellipsis :text="text" :lines="3" tooltip transfer theme="light" />
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

| 属性                   | 说明                                                                                                                                                                   | 类型           | 默认值 |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------ |
| text                   | 文本                                                                                                                                                                   | string         | -      |
| height                 | 限制的高度                                                                                                                                                             | number         | -      |
| lines                  | 限制行数，将换算为 height。如果设置了 height，则直接使用 height 计算                                                                                                   | number         | -      |
| length                 | 按照指定长度截取                                                                                                                                                       | number         | -      |
| full-width-recognition | 是否将全角字符的长度视为 2 来计算字符串长度，适用于 length                                                                                                             | boolean        | false  |
| disabled               | 是否禁用                                                                                                                                                               | boolean        | false  |
| tooltip                | 是否开启 tooltip                                                                                                                                                       | boolean        | false  |
| transfer               | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果                                            | boolean        | false  |
| theme                  | 主题，可选值为 `dark` 或 `light`                                                                                                                                       | String         | dark   |
| max-width              | 最大宽度，超出最大值后，文本将自动换行，并两端对齐                                                                                                                     | String, Number | 240    |
| placement              | 提示框出现的位置，可选值为`top`、`top-start`、`top-end`、`bottom`、`bottom-start`、`bottom-end`、`left`、`left-start`、`left-end`、`right`、`right-start`、`right-end` | string         | bottom |

### Ellipsis Events

| 事件名 | 说明                   | 返回值 |
| ------ | ---------------------- | ------ |
| show   | 文本全部展示的时候触发 | -      |
| hide   | 文本省略的时候触发     | -      |
