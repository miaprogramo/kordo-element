/**
 * 限制文本最多显示几行，以...结束，仅适用于 webkit 内核浏览器
 * */
export default {
  bind(el, binding) {
    el.style.display = "-webkit-inline-box";
    el.style.overflow = "hidden";
    el.style["-webkit-box-orient"] = "vertical";
    let line = 1;
    if (!isNaN(binding.value)) {
      line = binding.value;
    }
    el.style["-webkit-line-clamp"] = line;
  },
  componentUpdated(el, binding) {
    el.style.display = "-webkit-inline-box";
    el.style.overflow = "hidden";
    el.style["-webkit-box-orient"] = "vertical";
    let line = 1;
    if (binding.value) {
      line = binding.value;
    }
    el.style["-webkit-line-clamp"] = line;
  },
  unbind(el) {
    el.style.display = null;
    el.style.overflow = null;
    el.style["-webkit-box-orient"] = null;
    el.style["-webkit-line-clamp"] = null;
  },
};
