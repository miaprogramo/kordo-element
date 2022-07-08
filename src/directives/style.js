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
    updated(el, binding) {
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
    updated(el, binding) {
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
    updated(el, binding) {
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
    updated(el, binding) {
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
    updated(el, binding) {
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
    updated(el, binding) {
      if (binding && binding.value) {
        el.style.fontSize = `${binding.value}px`;
      }
    },
    unbind(el) {
      el.style.fontSize = null;
    },
  },
  color: {
    inserted(el, binding) {
      if (binding.value) {
        el.style.color = binding.value;
      }
    },
    bind(el, binding) {
      if (binding.value) {
        el.style.color = binding.value;
      }
    },
    updated(el, binding) {
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
    updated(el, binding) {
      if (binding.value) {
        el.style.backgroundColor = binding.value;
      }
    },
    unbind(el) {
      el.style.backgroundColor = null;
    },
  },
};
