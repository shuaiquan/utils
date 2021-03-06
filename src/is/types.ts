import { getValueTag, Tag } from "./typeTag";

// 基本类型的判断
// (language type)(http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)

export function isNumber(value: any): value is number {
    return typeof value === 'number';
}

export function isString(value: any): value is string {
    return typeof value === 'string';
}

export function isBoolean(value: any): value is boolean {
    return typeof value === 'boolean';
}

export function isUndefined(value: any): value is undefined {
    return value === undefined;
}

export function isNull(value: any): value is null {
    return value === null;
}

export function isFunc(value: any) {
    return typeof value === 'function';
}

export function isObject(value: any) {
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}

export function isArray(value: any): value is any[] {
    /**
     * 另新语法：'isArray' in Array
     */
    return isFunc(Array.isArray) ? Array.isArray(value) : getValueTag(value) === Tag.ArrayTag;
}

export function isSymbol(value: any) {
    return typeof value === 'symbol';
}

// 下面为常用的扩展类型

/**
 * 判断 value 是不是 object-like (typeof 结果为 'object' 且不是 null 的值)
 */
export function isObjectLike(value: any) {
    return value !== null && typeof value === 'object';
}

/**
 * 定义来自 lodash : Checks if value is a plain object, that is, an object created by the Object constructor or one with a [[Prototype]] of null.
 */
export function isPlainObject(value: any) {
    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
}
