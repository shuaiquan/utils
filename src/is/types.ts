/**
 * 基本类型的判断
 * 
 * (language type)(http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 */

export function isNumber(value: any) {
    return typeof value === 'number';
}

export function isString(value: any) {
    return typeof value === 'string';
}

export function isBoolean(value: any) {
    return typeof value === 'boolean';
}

export function isUndefined(value: any) {
    return value === undefined;
}

export function isNull(value: any) {
    return value === null;
}

export function isFunc(value: any) {
    return typeof value === 'function';
}

export function isObject(value: any) {
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
}

export function isArray(value: any) {
    /**
     * 另新语法：'isArray' in Array
     */
    return isFunc(Array.isArray) ? Array.isArray(value) : Object.prototype.toString.call(value) === '[object Array]';
}

export function isSymbol(value: any) {
    return typeof value === 'symbol';
}