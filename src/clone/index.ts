import { isObject, isArray } from "../is/types"

/**
 * Create a clone of value
 * 
 * @param value target of cloning
 * @param deep deep clone or shallow clone
 */
export function clone(value: any, deep: boolean = true) {
    return deep ? deepClone(value) : shallowClone(value);
}

/**
 * Creaste a shallow clone of value
 */
function shallowClone(value: any) {
    if (isArray(value)) {
        return (value as any[]).concat();
    } else if (isObject(value)) {
        return Object.assign({}, value);
    } else {
        return value;
    }
}

type CopyMap = Map<any, any>;

/**
 * Create a deep clone of value
 */
function deepClone(value: any) {
    const copiedMap: CopyMap = new Map();

    return baseClone(value, copiedMap);
}

/**
 * Create a deep clone of array type value
 */
function cloneArray(arr: any[], copiedMap: CopyMap) {
    if (copiedMap.get(arr)) {
        return copiedMap.get(arr);
    }

    const initValue: any[] = [];

    arr.forEach((value, index) => {
        initValue[index] = baseClone(value, copiedMap);
    });

    return initValue;
}

/**
 * Create a deep clone of object type value
 */
function cloneObject<T extends Object>(obj: Object, copiedMap: CopyMap) {
    if (copiedMap.get(obj)) {
        return copiedMap.get(obj);
    }

    const initValue: T = {} as T;

    Object.keys(obj).forEach((key) => {
        initValue[key] = baseClone(obj[key], copiedMap);
    })
}

/**
 * Handle different type clone
 */
function baseClone(item: any, copiedMap: CopyMap) {
    if (isArray(item)) {
        const value = cloneArray(item, copiedMap);
        copiedMap.set(item, value);
        return value;
    } else if (isObject(item)) {
        const value = cloneObject(item, copiedMap);
        copiedMap.set(item, value);
        return value;
    } else {
        return item;
    }
}

/**
 * TODO
 *
 * Symbol 类型的处理
 *
 * Function 的处理是否合适
 *
 * Set, Map 的处理
 */