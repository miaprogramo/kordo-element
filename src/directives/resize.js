import elementResizeDetectorMaker from "element-resize-detector";

export default {
  // 使用 bind，会在初始化时调用两次handler
  bind(el, binding) {
    function resizeHandler(e) {
      binding.value(e);
    }
    el.__resizeHandler = resizeHandler;
    el.__observer = elementResizeDetectorMaker();
    el.__observer.listenTo(el, resizeHandler);
  },
  unbind(el) {
    el.__observer__.removeListener(el, el.__resizeHandler);
    delete el.__resizeHandler;
    delete el.__observer;
  },
};
