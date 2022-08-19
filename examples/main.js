import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import KordoElement from "kordo-element";
import "kordo-element/styles/index.scss";
Vue.use(KordoElement);

import CodeView from "vue-code-view";
Vue.use(CodeView);

import "highlight.js/styles/default.css";
import "./styles/index.less";

import {
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  Switch,
  Button,
  Tooltip,
  Tag,
  Slider,
  Icon,
  Row,
  Col,
  Card,
  Message,
  Notification,
} from "element-ui";

Vue.use(Input)
  .use(InputNumber)
  .use(Radio)
  .use(RadioGroup)
  .use(Switch)
  .use(Button)
  .use(Tooltip)
  .use(Tag)
  .use(Slider)
  .use(Icon)
  .use(Row)
  .use(Col)
  .use(Card);

Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
Vue.component(CollapseTransition.name, CollapseTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
