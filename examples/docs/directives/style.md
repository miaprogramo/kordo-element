## 样式指令

将频繁使用的 CSS 样式封装为了指令，可以不用写大量的 `style` 行内样式。以下是支持的指令：

- `v-display`：设置元素的框类型 display
- `v-width`：设置元素宽度 width
- `v-height`：设置元素高度 height
- `v-margin`：设置元素 margin 值
- `v-padding`：设置元素 padding 值
- `v-font`：设置元素 fontSize
- `v-color`：设置元素 color
- `v-bg-color`：设置元素 background-color

:::demo

### v-display

设置元素的框类型 `display`。注意，绑定的值应为字符串。

```html
<template>
  <span v-display="'block'">这是一个 span 标签</span>
  <span v-display="'block'">这是一个 span 标签</span>
</template>
```

### v-width

设置元素宽度 `width`。如果绑定的值为百分比，则以百分比显示，例如 `25%`；如果绑定的值是数值，则以像素显示，比如 `25`，最终会显示为 `25px`。

```html
<template>
  <el-button type="primary" v-width="200">按钮</el-button>
</template>
```

### v-height

设置元素高度 `height`。如果绑定的值为百分比，则以百分比显示，例如 `25%`；如果绑定的值是数值，则以像素显示，比如 `25`，最终会显示为 `25px`。

```html
<template>
  <div v-height="100">这是一个 div</div>
  <div v-height="100">这是一个 div</div>
</template>
```

### v-margin

设置元素的 `margin`。只能绑定一个值。

```html
<template>
  <div>这是一个 普通div</div>
  <div v-margin="100">这是一个 margin 100px 的 div</div>
</template>
```

### v-padding

设置元素的 `padding`。只能绑定一个值。

```html
<template>
  <div>这是一个 普通div</div>
  <div v-padding="100">这是一个 padding 100px 的 div</div>
</template>
```

### v-font

设置字体大小 `fontSize`。

```html
<template>
  <span v-font="24">这是一个 span</span>
  图标也可以：<k-icon name="github" :size="24" />
</template>
```

### v-color

设置颜色 `color`。注意绑定的值应为字符串。

```html
<template>
  <span v-color="'red'">这是一个 span</span>
</template>
```

### v-bg-color

设置背景颜色 `background-color`。注意绑定的值应为字符串。

```html
<template>
  <span v-bg-color="'yellow'">这是一个 span</span>
</template>
```
