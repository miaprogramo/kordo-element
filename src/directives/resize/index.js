import elementResizeDetectorMaker from "element-resize-detector";
import { isClient, throttle, debounce } from "../../utils";

export default {
  inserted(el, binding) {
    if (!isClient) return;

    let handleResize = binding.value;

    if (binding.modifiers.throttle) handleResize = throttle(binding.value, 150);
    if (binding.modifiers.debounce) handleResize = debounce(binding.value, 150);

    el.__handleResize = handleResize;
    el.__observer = elementResizeDetectorMaker();
    el.__observer.listenTo(el, handleResize);
  },
  unbind(el) {
    if (!isClient) return;

    el.__observer.removeListener(el, el.__handleResize);
    el.__handleResize.cancel && el.__handleResize.cancel();

    delete el.__handleResize;
    delete el.__observer;
  },
};
