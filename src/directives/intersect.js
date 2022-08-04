export default {
  inserted(el, binding) {
    const callback = binding.value.callback;
    const options = binding.value.options || {};
    el._observe = new IntersectionObserver(callback, options);
    el._observe.observe(el);
  },
  unbind(el) {
    el._observe.unobserve(el);
  },
};
