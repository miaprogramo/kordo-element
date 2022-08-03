import NoticeBarItem from "./notice-bar-item.vue";

NoticeBarItem.install = function(Vue) {
  Vue.component(NoticeBarItem.name, NoticeBarItem);
};

export default NoticeBarItem;
