import { isNumber, isFunc } from "./types";

export function isNaN(value: any) {
    return isNumber(value) && value !== value;
}

export function isPromise(value: any) {
    /**
     * Promise/A+ 规范只定义了标准 then 方法(https://promisesaplus.com/)
     * 
     * https://github.com/petkaantonov/bluebird/issues/628
     * 
     * ES6的规范是 Promise 的一种实现，所以下面的写法在不同的环境中是存在问题的
     * 
     * value instanceof Promise
     */
    return value && isFunc(value.then);
}

export function isIterator(value: any) {
    // 待确认
    return value && isFunc(value.next) && isFunc(value.throw);
}