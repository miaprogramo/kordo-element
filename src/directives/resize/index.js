import elementResizeDetectorMaker from "element-resize-detector";
import throttle from "lodash.throttle";

export default {
  inserted(el, binding) {
    const handleResize = throttle(
      binding.value,
      binding.modifiers.throttle ? 150 : 0
    );
    el.__handleResize = handleResize;
    el.__observer = elementResizeDetectorMaker();
    el.__observer.listenTo(el, handleResize);
  },
  unbind(el) {
    el.__observer.removeListener(el, el.__handleResize);
    el.__handleResize.cancel();
    delete el.__handleResize;
    delete el.__observer;
  },
};
