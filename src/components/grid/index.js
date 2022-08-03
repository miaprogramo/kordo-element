import Grid from "./grid.vue";

Grid.install = function(Vue) {
  Vue.component(Grid.name, Grid);
};

export default Grid;
