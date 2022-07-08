import * as components from "./components";
import * as methods from "./methods";
import directives from "./directives";

const install = function(Vue) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });

  Object.keys(methods).forEach((key) => {
    Vue.prototype[key] = methods[key];
  });

  Object.keys(directives).forEach((key) => {
    Vue.directive(key, directives[key]);
  });
};

export default {
  install,
};
