<template>
  <svg :class="[prefixCls]" ref="icon" @click="$emit('click', $event)">
    <use :href="'#' + name"></use>
  </svg>
</template>
<script>
import "./iconpark";
import config from "../../config";
const prefixCls = config.prefix + "icon";

export default {
  name: prefixCls,
  props: {
    name: String,
  },
  data() {
    return {
      prefixCls,
    };
  },
};
</script>
