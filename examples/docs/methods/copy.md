## \$Copy 复制到剪贴板

调用式组件，将传入的一段文本复制到剪贴板。并自带提示功能。

:::demo

### 基础用法

设置 `text` 属性即可将指定内容复制到剪贴板。如有必要，可以进行更多配置，详见 API。

```html
<template>
  <el-input v-model="value" placeholder="随意输入内容，点击复制按钮" />
  <el-button @click="handleCopy" v-margin="'12px 0 0'">复制</el-button>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
      };
    },
    methods: {
      handleCopy() {
        this.$Copy({
          text: this.value,
        });
      },
    },
  };
</script>
```

### 回调用法

`success` 回调可以在复制成功时触发。

```html
<template>
  <el-input v-model="value" placeholder="随意输入内容，点击复制按钮" />
  <el-button @click="handleCopy" v-margin="'12px 0 0'">复制</el-button>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
      };
    },
    methods: {
      handleCopy() {
        this.$Copy({
          text: this.value,
          showTip: false,
          success: () => {
            this.$notify({
              title: "复制成功的回调",
            });
          },
          error: () => {
            this.$notify({
              title: "复制失败的回调",
            });
          },
        });
      },
    },
  };
</script>
```

:::demo

### \$Copy Params

| 参数       | 说明                 | 类型     | 默认值   |
| ---------- | -------------------- | -------- | -------- |
| text       | 要复制的文本         | string   | -        |
| showTip    | 是否显示提示弹窗     | boolean  | true     |
| successTip | 复制成功时的提示文案 | string   | 复制成功 |
| errorTip   | 复制失败时的提示文案 | string   | 复制失败 |
| success    | 复制成功时的回调     | function | -        |
| error      | 复制失败时的回调     | function | -        |
