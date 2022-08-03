import CountDown from "./count-down.vue";

CountDown.install = function(Vue) {
  Vue.component(CountDown.name, CountDown);
};

export default CountDown;
