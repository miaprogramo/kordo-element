export default {
  inserted(el, binding) {
    const callback = binding.value.callback;
    const options = binding.value.options || {};
    el.__observe = new IntersectionObserver(callback, options);
    el.__observe.observe(el);
  },
  unbind(el) {
    el.__observe.unobserve(el);
  },
};
