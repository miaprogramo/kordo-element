## 自定义主题

Kordo Element 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式，可以进行不同程度的样式自定义。

### 在项目中改变 SCSS 变量

Kordo Element 的 theme 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Kordo Element 的样式变量。新建一个样式文件，例如 `theme.scss`，写入以下内容：

```css
/* 改变主题色变量 */
$--color-primary: #168365;

@import "kordo-element/src/styles/index.scss";
```

之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Kordo Element 编译好的 CSS 文件）：

```javascript
import Vue from "vue";
import KordoElement from "kordo-element";
import "./theme.scss";

Vue.use(KordoElement);
```

完整的变量列表可以查看 [默认样式变量](https://github.com/miaprogramo/kordo-element/blob/dev/src/styles/common/var.scss)。
