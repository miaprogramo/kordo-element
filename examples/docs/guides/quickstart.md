## 快速上手

### 引入 Element

在 main.js 中写入以下内容：

```javascript
import Vue from "vue";
import App from "./App.vue";

import KordoElement from "kordo-element";
import "kordo-element/dist/kordo-element.css";

Vue.use(KordoElement);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
```
