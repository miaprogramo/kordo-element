import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import KordoElement from "kordo-element";
import "kordo-element/styles/index.less";
Vue.use(KordoElement);

import CodeView from "vue-code-view";
Vue.use(CodeView);

import "highlight.js/styles/default.css";
import "./styles/index.less";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
