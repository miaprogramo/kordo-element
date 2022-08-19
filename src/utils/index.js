import cloneDeep from "./cloneDeep";
import debounce from "./debounce";
import throttle from "./throttle";

export const isClient = typeof window !== "undefined";

export { cloneDeep, debounce, throttle };
