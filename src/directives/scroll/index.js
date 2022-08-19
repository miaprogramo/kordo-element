import { on, off } from "../../utils/dom";
import { isClient, throttle } from "../../utils";

export default {
  inserted(el, binding) {
    if (!isClient) return;

    const target = binding.modifiers.self
      ? el
      : binding.arg
      ? document.querySelector(binding.arg)
      : window;

    if (!target) return;

    let handleScroll = binding.value;
    if (binding.modifiers.throttle) handleScroll = throttle(binding.value, 150);
    el.__handleScroll = handleScroll;
    on(target, "scroll", handleScroll);
  },
  unbind(el, binding) {
    if (!isClient) return;

    const target = binding.modifiers.self
      ? el
      : binding.arg
      ? document.querySelector(binding.arg)
      : window;

    if (!target) return;

    off(target, "scroll", el.__handleScroll);
    el.__handleScroll.cancel && el.__handleScroll.cancel();
    delete el.__handleScroll;
  },
};
