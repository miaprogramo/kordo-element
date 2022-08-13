import elementResizeDetectorMaker from "element-resize-detector";
import throttle from "../../utils/throttle";
import debounce from "../../utils/debounce";

export default {
  inserted(el, binding) {
    let handleResize = binding.value;
    if (binding.modifiers.throttle) handleResize = throttle(binding.value, 150);
    if (binding.modifiers.debounce) handleResize = debounce(binding.value, 150);
    el.__handleResize = handleResize;
    el.__observer = elementResizeDetectorMaker();
    el.__observer.listenTo(el, handleResize);
  },
  unbind(el) {
    el.__observer.removeListener(el, el.__handleResize);
    el.__handleResize.cancel && el.__handleResize.cancel();
    delete el.__handleResize;
    delete el.__observer;
  },
};
