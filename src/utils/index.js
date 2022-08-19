import clonedeep from "./clonedeep";
import debounce from "./debounce";
import throttle from "./throttle";

export const isClient = typeof window !== "undefined";

export { clonedeep, debounce, throttle };
