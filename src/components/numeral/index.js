import Numeral from "./numeral.vue";

Numeral.install = function(Vue) {
  Vue.component(Numeral.name, Numeral);
};

export default Numeral;
