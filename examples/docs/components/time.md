## Time 时间

格式化数值的组件。

:::demo

### 基础用法

设置一个时间戳或 Date，可自动转为相对于当前的时间。

```html
<template>
  <div>
    <k-time :time="time1" />
    <br />
    <k-time :time="time2" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        time1: new Date().getTime() - 60 * 3 * 1000,
        time2: new Date().getTime() - 86400 * 3 * 1000,
      };
    },
  };
</script>
```

### 自动更新间隔

设置自动更新间隔，默认为 60 秒。

```html
<template>
  <k-time :time="time" :interval="1" />
</template>
<script>
  export default {
    data() {
      return {
        time: new Date(),
      };
    },
  };
</script>
```

### 不同类型

可以根据情况，设置不同的显示类型。

```html
<template>
  <div>
    <k-time :time="time" />
    <br />
    <k-time :time="time" type="date" />
    <br />
    <k-time :time="time" type="datetime" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        time: new Date().getTime() - 86400 * 3 * 1000,
      };
    },
  };
</script>
```

:::demo

### Time Attributes

| 属性     | 说明                                             | 类型                   | 默认值   |
| -------- | ------------------------------------------------ | ---------------------- | -------- |
| time     | 需要对比的时间，可以是时间戳或 Date 类型         | number / date / string | -        |
| type     | 类型，可选值为 `relative` 、`date` 或 `datetime` | string                 | relative |
| interval | 自动更新的间隔，单位：秒                         | number                 | 60       |
| hash     | 填写该值，点击会定位锚点                         | string                 | -        |
