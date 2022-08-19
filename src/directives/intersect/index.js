import { isClient } from "../../utils";

export default {
  inserted(el, binding) {
    if (!isClient) return;

    const callback = binding.value.callback;
    const options = binding.value.options || {};

    el.__observe = new IntersectionObserver(callback, options);
    el.__observe.observe(el);
  },
  unbind(el) {
    el.__observe.unobserve(el);
  },
};
