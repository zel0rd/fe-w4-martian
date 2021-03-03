export const go = (arg, ...fns) => fns.reduce((res, fn) => fn(res), arg);

export const pipe = (fn, ...fns) => (...args) => go(fn(...args), ...fns);

export const _ = {
  $: function (selector, base = document) {
    return base.querySelector(selector);
  },
  $all: function (selector, base = document) {
    return base.querySelectorAll(selector);
  }
};
