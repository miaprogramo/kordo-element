/**
 * 限制文本最多显示几行，以...结束，仅适用于 webkit 内核浏览器
 * */
import { addClass, removeClass } from "../utils/assist.js";
import config from "../config";
const prefixCls = config.prefix + "line-clamp";

export default {
  bind(el, binding) {
    if (binding.value) {
      addClass(el, prefixCls);
      el.style["-webkit-line-clamp"] = binding.value;
    }
  },
  update(el, binding) {
    if (binding.value) {
      el.style["-webkit-line-clamp"] = binding.value;
    }
  },
  unbind(el) {
    removeClass(el, prefixCls);
    el.style["-webkit-line-clamp"] = null;
  },
};
