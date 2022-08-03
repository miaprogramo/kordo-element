function unit(value) {
  return String(value).endsWith("%") ? "" : "px";
}

export default {
  display: {
    bind(el, binding) {
      if (binding.value) {
        el.style.display = binding.value;
      }
    },
    componentUpdated(el, binding) {
      if (binding.value) {
        el.style.display = binding.value;
      }
    },
    unbind(el) {
      el.style.display = null;
    },
  },
  width: {
    bind(el, binding) {
      if (binding.value) {
        el.style.width = binding.value + unit(binding.value);
      }
    },
    componentUpdated(el, binding) {
      if (binding.value) {
        el.style.width = binding.value + unit(binding.value);
      }
    },
    unbind(el) {
      el.style.width = null;
    },
  },
  height: {
    bind(el, binding) {
      if (binding.value) {
        el.style.height = binding.value + unit(binding.value);
      }
    },
    componentUpdated(el, binding) {
      if (binding.value) {
        el.style.height = binding.value + unit(binding.value);
      }
    },
    unbind(el) {
      el.style.height = null;
    },
  },
  margin: {
    bind(el, binding) {
      if (binding.value) {
        el.style.margin = binding.value + unit(binding.value);
      }
    },
    componentUpdated(el, binding) {
      if (binding.value) {
        el.style.margin = binding.value + unit(binding.value);
      }
    },
    unbind(el) {
      el.style.margin = null;
    },
  },
  padding: {
    bind(el, binding) {
      if (binding.value) {
        el.style.padding = binding.value + unit(binding.value);
      }
    },
    componentUpdated(el, binding) {
      if (binding.value) {
        el.style.padding = binding.value + unit(binding.value);
      }
    },
    unbind(el) {
      el.style.padding = null;
    },
  },
  font: {
    bind(el, binding) {
      if (binding && binding.value) {
        el.style.fontSize = `${binding.value}px`;
      }
    },
    componentUpdated(el, binding) {
      if (binding && binding.value) {
        el.style.fontSize = `${binding.value}px`;
      }
    },
    unbind(el) {
      el.style.fontSize = null;
    },
  },
  color: {
    bind(el, binding) {
      if (binding.value) {
        el.style.color = binding.value;
      }
    },
    componentUpdated(el, binding) {
      if (binding.value) {
        el.style.color = binding.value;
      }
    },
    unbind(el) {
      el.style.color = null;
    },
  },
  bgColor: {
    bind(el, binding) {
      if (binding.value) {
        el.style.backgroundColor = binding.value;
      }
    },
    componentUpdated(el, binding) {
      if (binding.value) {
        el.style.backgroundColor = binding.value;
      }
    },
    unbind(el) {
      el.style.backgroundColor = null;
    },
  },
};
