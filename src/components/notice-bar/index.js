import NoticeBar from "./notice-bar.vue";

NoticeBar.install = function(Vue) {
  Vue.component(NoticeBar.name, NoticeBar);
};

export default NoticeBar;
