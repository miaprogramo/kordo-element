import deepClone from "./deepClone";
import debounce from "./debounce";
import throttle from "./throttle";

export const isClient = typeof window !== "undefined";

export { deepClone, debounce, throttle };
