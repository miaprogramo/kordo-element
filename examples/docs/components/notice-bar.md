## NoticeBar 通知栏

用于循环播放展示一组消息通知。

:::demo

### 基础用法

设置属性 `scrollable` 可以开启滚动播放。

```html
<template>
  <div>
    <k-notice-bar>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</k-notice-bar>

    <p><strong>开启滚动播放</strong></p>

    <k-notice-bar scrollable>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</k-notice-bar>

    <p><strong>内容长度溢出时默认开启</strong></p>

    <k-notice-bar :width="200">在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</k-notice-bar>
  </div>
</template>
```

### 关闭通知

设置属性 `closable` 可以开启关闭按钮。

```html
<template>
  <k-notice-bar closable>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</k-notice-bar>
</template>
```

### 垂直滚动

设置属性 `vertical` 可以开启垂直滚动。

注意：垂直滚动需要使用 `NoticeBarItem` 组件。

```html
<template>
  <k-notice-bar vertical>
    <k-notice-bar-item v-for="(item, index) in list" :key="index">
      {{ item }}
    </k-notice-bar-item>
  </k-notice-bar>
</template>
<script>
  export default {
    data() {
      return {
        list: ["重启，可以解决电脑百分之七十的问题。", "重装系统，可以解决百分之八十的问题。", "换个电脑，可以解决百分之九十的问题。", "解决掉提出bug的人，可以解决百分之一百的问题。"],
      };
    },
  };
</script>
```

:::demo

### NoticeBar Attributes

| 属性       | 说明               | 类型          | 默认  |
| ---------- | ------------------ | ------------- | ----- |
| vertical   | 是否垂直滚动       | boolean       | false |
| width      | 宽度，默认单位：px | number,string | -     |
| height     | 高度，默认单位：px | number,string | 40    |
| color      | 文本颜色           | string        | -     |
| background | 背景颜色           | string        | -     |
| closable   | 是否开启关闭按钮   | boolean       | false |

### NoticeBar Attributes (vertical=false)

| 属性       | 说明                                     | 类型    | 默认 |
| ---------- | ---------------------------------------- | ------- | ---- |
| scrollable | 是否开启滚动播放，内容长度溢出时默认开启 | boolean | true |
| speed      | 滚动速率 (px/s)                          | number  | 60   |

### NoticeBar Attributes (vertical=true)

| 属性      | 说明                              | 类型   | 默认 |
| --------- | --------------------------------- | ------ | ---- |
| direction | 切换方向，可选值为 `up` 或 `down` | string | up   |
| duration  | 切换动画时间(ms)                  | number | 1000 |
| interval  | 停留时间(ms)                      | number | 2000 |

### NoticeBar Methods

| 方法名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| close  | 可以关闭通知 | -    |

### NoticeBar Events

| 事件名 | 说明           | 参数 |
| ------ | -------------- | ---- |
| close  | 关闭通知时触发 | -    |

### NoticeBarItem Events

| 事件名 | 说明       | 参数 |
| ------ | ---------- | ---- |
| click  | 点击时触发 | -    |

### NoticeBar Slots

| 名称       | 说明             |
| ---------- | ---------------- |
| default    | 默认插槽内容     |
| left-icon  | 左侧图标插槽内容 |
| right-icon | 右侧图标插槽内容 |

### NoticeBarItem Slots

| 名称    | 说明         |
| ------- | ------------ |
| default | 默认插槽内容 |
