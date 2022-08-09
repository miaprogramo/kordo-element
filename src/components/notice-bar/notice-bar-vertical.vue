<template>
  <div ref="vertical" :class="[prefixCls + '_content']" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import config from "../../config";
const prefixCls = config.prefix + "notice-bar";

export default {
  name: "notice-bar-vertical",
  data() {
    return {
      prefixCls,
      currenTranslateY: 0,
      length: 0,
      currentIndex: 0,
      noAnimate: false,
    };
  },
  computed: {
    direction() {
      return this.$parent.direction;
    },
    height() {
      return this.$parent.height;
    },
    duration() {
      return this.$parent.duration;
    },
    interval() {
      return this.$parent.interval;
    },
    styles() {
      return {
        transform: `translate3d(0,${this.currenTranslateY}px,0)`,
        transition: `transform ${this.noAnimate ? 0 : this.duration}ms`,
      };
    },
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    init() {
      this.destroy();

      if (this.cloneNode) {
        this.$refs.vertical.removeChild(this.cloneNode);
      }

      this.cloneNode = null;
      let firstItem = this.$refs.vertical.firstElementChild;
      if (!firstItem) {
        return false;
      }
      this.length = this.$refs.vertical.children.length;

      if (this.direction === "up") {
        this.cloneNode = firstItem.cloneNode(true);
        this.$refs.vertical.appendChild(this.cloneNode);
      } else {
        this.cloneNode = this.$refs.vertical.lastElementChild.cloneNode(true);
        this.$refs.vertical.insertBefore(this.cloneNode, firstItem);
      }

      this.start();
    },
    start() {
      if (this.direction === "down") this.go(false);
      this.timer = setInterval(() => {
        if (this.direction === "up") {
          this.currentIndex += 1;
          this.currenTranslateY = -this.currentIndex * this.height;
        } else {
          this.currentIndex -= 1;
          this.currenTranslateY = -(this.currentIndex + 1) * this.height;
        }
        if (this.currentIndex === this.length) {
          setTimeout(() => {
            this.go(true);
          }, this.duration);
        } else if (this.currentIndex === -1) {
          setTimeout(() => {
            this.go(false);
          }, this.duration);
        } else {
          this.noAnimate = false;
        }
      }, this.interval + this.duration);
    },
    go(toFirst) {
      this.noAnimate = true;
      if (toFirst) {
        this.currentIndex = 0;
        this.currenTranslateY = 0;
      } else {
        this.currentIndex = this.length - 1;
        this.currenTranslateY = -(this.currentIndex + 1) * this.height;
      }
    },
    destroy() {
      this.timer && clearInterval(this.timer);
    },
  },
};
</script>
