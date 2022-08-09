## 自定义主题

Kordo Element 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式，可以进行不同程度的样式自定义。

### 在项目中改变 SCSS 变量

Kordo Element 的 theme 使用 SCSS 编写，如果你的项目也使用了 SCSS，那么可以直接在项目中改变 Kordo Element 的样式变量。新建一个样式文件，例如 `theme.scss`，写入以下内容：

```css
/* 改变主题色变量 */
$--color-primary: #168365;

@import "kordo-element/styles/index.scss";
```

之后，在项目的入口文件中，直接引入以上样式文件即可（无需引入 Kordo Element 编译好的 CSS 文件）：

```javascript
import Vue from "vue";
import KordoElement from "kordo-element";
import "./theme.scss";

Vue.use(KordoElement);
```

### 完整 SCSS 变量

```css
//* Color
--------------------------*/$--color-primary: #409eff !default;
$--color-white: #ffffff !default;
$--color-black: #000000 !default;
/// Font
$--color-text-primary: #303133 !default;
/// Background
$--background-color-base: #f5f7fa !default;
/// Border
$--border-color-base: #dcdfe6 !default;

/* Border
-------------------------- */
/// Radius
$--border-radius-base: 4px !default;
/// Box-shadow
$--box-shadow-base: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04) !default;
$--box-shadow-dark: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12) !default;
$--box-shadow-light: 0 2px 12px 0 rgba(0, 0, 0, 0.1) !default;

/* Typography
-------------------------- */
/// Font
$--font-size-base: 14px !default;
$--font-size-large: 18px !default;
$--font-size-icon: 16px !default;
/// Line-height
$--line-height-base: 1.5 !default;

/* Padding
-------------------------- */
$--padding-base: 4px !default;
$--padding-xs: $--padding-base * 2 !default;
$--padding-sm: $--padding-base * 3 !default;
$--padding-md: $--padding-base * 4 !default;
$--padding-lg: $--padding-base * 6 !default;

/* Margin
-------------------------- */
$--margin-base: 4px !default;
$--margin-xs: $--margin-base * 2 !default;
$--margin-sm: $--margin-base * 3 !default;
$--margin-md: $--margin-base * 4 !default;
$--margin-lg: $--margin-base * 6 !default;

/* Ellipsis Tooltip
-------------------------- */
/// Background
$--tooltip-background-color: #303133 !default;
/// Z-index
$--index-tooltip: 2000 !default;

/* Notice-bar
-------------------------- */
$--notice-bar-text-color: #ecf5ff !default;
$--notice-bar-background-color: #ecf5ff !default;
```
