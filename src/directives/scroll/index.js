import { on, off } from "../../utils/dom";
import throttle from "lodash.throttle";

export default {
  inserted(el, binding) {
    const target = binding.modifiers.self
      ? el
      : binding.arg
      ? document.querySelector(binding.arg)
      : window;

    if (!target) return;

    const handleScroll = throttle(
      binding.value,
      binding.modifiers.throttle ? 150 : 0
    );
    el.__handleScroll = handleScroll;
    on(target, "scroll", handleScroll);
  },
  unbind(el, binding) {
    const target = binding.modifiers.self
      ? el
      : binding.arg
      ? document.querySelector(binding.arg)
      : window;

    if (!target) return;

    off(target, "scroll", el.__handleScroll);
    el.__handleScroll.cancel();
    delete el.__handleScroll;
  },
};
