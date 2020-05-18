export function compose(...fns) {
  return function (...args) {
    return fns.reduceRight((acc, fn) => fn(acc), ...args);
  };
}

export function pipe(...fns) {
  return function (...args) {
    return fns.reduce((acc, fn) => fn(acc), ...args);
  };
}
