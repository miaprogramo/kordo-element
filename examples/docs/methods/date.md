## \$Date 日期操作

可以对日期和时间进行各种简单和复杂的操作。

:::demo

### 用法

\$Date 使用了 [dayjs](https://dayjs.gitee.io/zh-CN/)，可以对时间或日期快速操作，支持链式操作。

```html
<template>
  <div>
    <div>今天：{{today}}</div>
    <div>明天：{{tomorrow}}</div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        today: "",
        tomorrow: "",
      };
    },
    created() {
      this.handleGetToday();
      this.handleNextDay();
    },
    methods: {
      handleGetToday() {
        this.today = this.$Date().format("YYYY-MM-DD HH:mm:ss");
      },
      handleNextDay() {
        // 可以直接对日期进行加减操作
        this.tomorrow = this.$Date()
          .add(1, "day")
          .format("YYYY-MM-DD HH:mm:ss");
      },
    },
  };
</script>
```
