## CountDown 倒计时

根据设置目标时间来倒计时的组件。

:::demo

### 基础用法

简单的倒计时组件使用。

```html
<template>
  <el-row>
    <el-col :span="12">
      <k-count-down :target="targetTime1" v-font="24" />
    </el-col>
    <el-col :span="12">
      <k-count-down :target="targetTime2" :on-end="handleEnd" v-font="24" />
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data() {
      return {
        targetTime1: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
        targetTime2: 10 * 1000,
      };
    },
    methods: {
      handleEnd() {
        this.$message("倒计时结束");
      },
    },
  };
</script>
```

### 自定义显示格式

设置属性 `format` 可以自定义显示格式

```html
<template>
  <k-count-down :target="targetTime" :format="handleFormat" v-font="24" />
</template>
<script>
  export default {
    data() {
      return {
        targetTime: new Date(new Date().getTime() + 26 * 60 * 60 * 1000 + 90 * 1000),
      };
    },
    methods: {
      handleFormat(currentValue, { days, hours, minutes, seconds }) {
        return `${days}天${hours}时${minutes}分${seconds}秒`;
      },
    },
  };
</script>
```

:::demo

### CountDown Attributes

| 属性     | 说明                       | 类型                                                | 默认值 |
| -------- | -------------------------- | --------------------------------------------------- | ------ |
| target   | 目标时间                   | number,date                                         | -      |
| interval | 自动倒计时间隔，单位：毫秒 | number                                              | 1000   |
| format   | 自定义显示格式             | function(currentValue,{days,hours,minutes,seconds}) | -      |
| on-end   | 倒计时结束时的钩子         | function                                            | -      |
