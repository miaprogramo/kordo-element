## CountUp 数字动画

将一个数字以动画的形式动态渐变到指定值的组件。

:::demo

### 基础用法

该组件可以自由控制数字动画过程。

```html
<template>
  <div>
    <p><strong>目标值：1234，持续时间：6秒</strong></p>
    <k-count-up :target="1234" :duration="6" ref="count" v-font="24" />
    <el-row type="flex" v-margin="'12px 0 0'">
      <el-button @click="handlePause">暂停/继续</el-button>
      <el-button @click="handleReset">重置</el-button>
      <el-button @click="handleStart">开始</el-button>
      <el-button @click="handleUpdate">更新至：</el-button>
      <el-input-number v-model="update" :min="1"></el-input-number>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        update: 5000,
      };
    },
    methods: {
      handlePause() {
        this.$refs.count.pauseResume();
      },
      handleReset() {
        this.$refs.count.reset();
      },
      handleStart() {
        this.$refs.count.start();
      },
      handleUpdate() {
        this.$refs.count.update(this.update);
      },
    },
  };
</script>
<style>
  .el-input-number {
    margin-left: 10px;
  }
</style>
```

### 小数

设置属性 `decimals` 指定小数位数。

```html
<template>
  <div>
    <p><strong>目标值：1234，持续时间：6秒，小数位数：2位</strong></p>
    <k-count-up :target="1234" :duration="6" :decimals="2" ref="count" v-font="24" />
    <div v-margin="'12px 0 0'">
      <el-button @click="handleRestart">重新开始</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleRestart() {
        this.$refs.count.reset();
        this.$refs.count.start();
      },
    },
  };
</script>
```

### 千分位

设置属性 `has-separator` 显示千分位。

```html
<template>
  <div>
    <p><strong>目标值：1234，持续时间：6秒，显示千分位</strong></p>
    <k-count-up :target="1234" :duration="6" has-separator ref="count" v-font="24" />
    <div v-margin="'12px 0 0'">
      <el-button @click="handleRestart">重新开始</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleRestart() {
        this.$refs.count.reset();
        this.$refs.count.start();
      },
    },
  };
</script>
```

### 前缀

设置属性 `prefix` 前缀。

```html
<template>
  <div>
    <p><strong>目标值：1234，持续时间：6秒，显示千分位</strong></p>
    <k-count-up :target="1234" :duration="6" prefix="￥" ref="count" v-font="24" />
    <div v-margin="'12px 0 0'">
      <el-button @click="handleRestart">重新开始</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      handleRestart() {
        this.$refs.count.reset();
        this.$refs.count.start();
      },
    },
  };
</script>
```

### 回调

设置属性 `callback` 可以在结束时继续完成操作。

```html
<template>
  <div>
    <p><strong>初始目标值：50，到达后，延迟1秒再到目标值 100</strong></p>
    <k-count-up :target="end" :duration="6" :on-end="handleUpdate" ref="count" v-font="24" />
    <div v-margin="'12px 0 0'">
      <el-button @click="handleRestart">重新开始</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        end: 50,
      };
    },
    methods: {
      handleUpdate() {
        setTimeout(() => {
          this.end = 100;
        }, 1000);
      },
      handleRestart() {
        this.end = 50;
        this.$refs.count.reset();
        this.$refs.count.start(this.handleUpdate);
      },
    },
  };
</script>
```

:::demo

### CountUp Attributes

| 属性          | 说明                     | 类型                   | 默认值 |
| ------------- | ------------------------ | ---------------------- | ------ |
| target        | 目标值，必填             | number                 | -      |
| start-value   | 起始值                   | number                 | 0      |
| decimals      | 小数位数                 | number                 | 2      |
| has-separator | 数字是否有千位分隔符     | boolean                | false  |
| separator     | 数字千位分隔符           | string                 | ,      |
| prefix        | 前缀                     | string                 | -      |
| suffix        | 后缀                     | string                 | -      |
| duration      | 持续时间，单位：秒       | number                 | 2      |
| easing        | 是否使用 easing 动画曲线 | boolean                | true   |
| format        | 自定义显示格式           | function(currentValue) | -      |
| on-end        | 动画结束时的钩子         | function               | -      |

### CountUp Methods

| 方法名      | 说明       | 参数           |
| ----------- | ---------- | -------------- |
| pauseResume | 暂停/继续  | 无             |
| reset       | 重置       | 无             |
| start       | 开始       | callback(可选) |
| update      | 更新结束值 | newEndValue    |
