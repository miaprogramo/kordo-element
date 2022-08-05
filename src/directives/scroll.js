import { on, off } from "../utils/dom";

export default {
  inserted(el, binding) {
    const target = binding.modifiers.self
      ? el
      : binding.arg
      ? document.querySelector(binding.arg)
      : window;

    if (!target) return;

    on(target, "scroll", binding.value);
  },
  unbind(el, binding) {
    const target = binding.modifiers.self
      ? el
      : binding.arg
      ? document.querySelector(binding.arg)
      : window;

    if (!target) return;

    off(target, "scroll", binding.value);
  },
};
