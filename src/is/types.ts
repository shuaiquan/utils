/**
 * 基本类型的判断
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
    return typeof value === 'object' && value !== null;
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