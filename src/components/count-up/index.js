import CountUp from "./count-up.vue";

CountUp.install = function(Vue) {
  Vue.component(CountUp.name, CountUp);
};

export default CountUp;
