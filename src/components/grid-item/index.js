import GridItem from "./grid-item.vue";

GridItem.install = function(Vue) {
  Vue.component(GridItem.name, GridItem);
};

export default GridItem;
