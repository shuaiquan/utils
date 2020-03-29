import { isNumber, isFunc, isObjectLike } from "./types";
import { getValueTag, Tag } from "./typeTag";

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
    return value && isFunc(value.next) && isFunc(value.throw);
}

/**
 * 判断 value 是否等于 undefined 或者 null
 */
export function isNil(value: any) {
    // 参照了在 lodash 里的实现，它利用隐式转化的机制
    // 关于在非严格相等判断中，类型的隐式转化，可参照：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness
    return value == null;
}

export function isSet(value: any) {
    return isObjectLike(value) && getValueTag(value) === Tag.SetTag;
}

export function isMap(value: any) {
    return isObjectLike(value) && getValueTag(value) === Tag.MapTag;
}

export function isError(value: any) {
    return isObjectLike(value) && getValueTag(value) === Tag.ErrorTag;
}
