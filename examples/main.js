import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import KordoElement from "kordo-element";
// import "kordo-element/styles/index.scss";
import "./theme.scss";
Vue.use(KordoElement);

import CodeView from "vue-code-view";
Vue.use(CodeView);

import "highlight.js/styles/default.css";
import "./styles/index.less";

import {
  Row,
  Col,
  Button,
  Radio,
  RadioGroup,
  inputNumber,
  Switch,
  Slider,
  Tooltip,
  Card,
  Notification,
} from "element-ui";

Vue.use(Row)
  .use(Col)
  .use(Button)
  .use(Radio)
  .use(RadioGroup)
  .use(inputNumber)
  .use(Switch)
  .use(Slider)
  .use(Tooltip)
  .use(Card);

Vue.prototype.$notify = Notification;

import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
Vue.component(CollapseTransition.name, CollapseTransition);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
