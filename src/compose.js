export default function(...fns) {
  return function(...args) {
    return fns.reduceRight((acc, fn) => fn(acc), ...args);
  };
}
