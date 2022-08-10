// 开发指南
export const guides = [
  {
    path: "/",
    name: "Introduce",
    title: "介绍",
  },
  {
    path: "/guides/installation",
    name: "Installation",
    title: "安装",
  },
  {
    path: "/guides/quickstart",
    name: "Quickstart",
    title: "快速上手",
  },
  {
    path: "/guides/custom-theme",
    name: "CustomTheme",
    title: "定制主题",
  },
];
// 组件
export const components = [
  {
    title: "布局",
    children: [
      {
        path: "/components/grid",
        name: "Grid",
        title: "Grid 宫格",
      },
      {
        path: "/components/ellipsis",
        name: "Ellipsis",
        title: "Ellipsis 文本省略",
      },
      {
        path: "/components/space",
        name: "Space",
        title: "Space 间距",
      },
    ],
  },
  {
    title: "导航",
    children: [
      {
        path: "/components/affix",
        name: "Affix",
        title: "Affix 固钉",
      },
    ],
  },
  {
    title: "展示",
    children: [
      {
        path: "/components/notice-bar",
        name: "NoticeBar",
        title: "NoticeBar 通知栏",
      },
      // {
      //   path: "/components/descriptions",
      //   name: "Descriptions",
      //   title: "Descriptions 描述列表",
      // },
      {
        path: "/components/count-down",
        name: "CountDown",
        title: "CountDown 倒计时",
      },
      {
        path: "/components/count-up",
        name: "CountUp",
        title: "CountUp 数字动画",
      },
      {
        path: "/components/numeral",
        name: "Numeral",
        title: "Numeral 数字格式化",
      },
      {
        path: "/components/time",
        name: "Time",
        title: "Time 时间",
      },
    ],
  },
];
// 方法
export const methods = [
  {
    path: "/methods/copy",
    name: "Copy",
    title: "$Copy 复制到剪贴板",
  },
  {
    path: "/methods/date",
    name: "Date",
    title: "$Date 日期操作",
  },
  {
    path: "/methods/scroll-to",
    name: "ScrollTo",
    title: "$ScrollTo 滚动",
  },
];
// 指令
export const directives = [
  {
    path: "/directives/style",
    name: "Style",
    title: "v-style 样式",
  },
  {
    path: "/directives/line-clamp",
    name: "LineClamp",
    title: "v-line-clamp 文本按行省略",
  },
  {
    path: "/directives/click-outside",
    name: "ClickOutside",
    title: "v-click-outside 元素外部点击",
  },
  {
    path: "/directives/resize",
    name: "Resize",
    title: "v-resize 监听尺寸变化",
  },
  {
    path: "/directives/intersect",
    name: "Intersect",
    title: "v-intersect 监听元素曝光",
  },
  {
    path: "/directives/scroll",
    name: "Scroll",
    title: "v-scroll 监听元素滚动",
  },
];
