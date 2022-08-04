## 快速上手

### 引入 Kordo-Element

你可以引入整个 Kordo-Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Kordo-Element。

#### 完整引用

在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import App from "./App.vue";

import KordoElement from "kordo-element";
import "kordo-element/lib/kordo-element.css";

Vue.use(KordoElement);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

#### 按需引用

借助 [babel-plugin-import](https://github.com/umijs/babel-plugin-import)我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-import：

```javascript
npm install babel-plugin-import --save-dev
```

然后，将 .babelrc 修改为：

```javascript
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "kordo-element",
        "libraryDirectory": "src/components",
        customStyleName: (name) => `kordo-element/src/styles/${name}.less`,
      },
      "kordo-element"
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 `Grid` 和 `GridItem`，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import App from "./App.vue";

import { Grid, GridItem } from "kordo-element";
Vue.use(Grid).use(GridItem);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```

如果你只希望引入部分方法或者指令，比如 `$Copy` 、 `v-style` 、 `v-line-clamp`，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import App from "./App.vue";

import Copy from "kordo-element/src/methods/copy";
import Style from "kordo-element/src/directives/style";
import LineClamp from "kordo-element/src/directives/line-clamp";

Vue.prototype.$Copy = Copy;
Object.keys(Style).forEach((key) => {
  Vue.directive(key, Style[key]);
});
Vue.directive("LineClamp", LineClamp);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```
