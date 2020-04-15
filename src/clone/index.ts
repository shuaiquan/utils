import { isArray, isPlainObject } from "../is/types"

/**
 * Create a clone of value
 * 
 * @param value target of cloning
 * @param deep deep clone or shallow clone
 */
export function clone<T>(value: T, deep: boolean = true) {
    return deep ? deepClone(value) : shallowClone(value);
}

/**
 * Creaste a shallow clone of value
 */
function shallowClone<T>(value: T) {
    if (isArray(value)) {
        return <typeof value>value.concat();
    } else if (isPlainObject(value)) {
        return Object.assign({}, value);
    }
    return value;
}

type CopyMap = Map<any, any>;

/**
 * Create a deep clone of value
 */
function deepClone<T>(value: T) {
    const copiedMap: CopyMap = new Map();

    return baseClone(value, copiedMap);
}

/**
 * Create a deep clone of array type value
 */
function cloneArray(arr: any[], copiedMap: CopyMap) {
    if (copiedMap.has(arr)) {
        return <typeof arr>copiedMap.get(arr);
    }

    const initValue: typeof arr = [];

    arr.forEach((value, index) => {
        initValue[index] = baseClone(value, copiedMap);
    });

    return initValue;
}

/**
 * Create a deep clone of object type value
 */
function cloneObject<T extends Object>(obj: Object, copiedMap: CopyMap) {
    if (copiedMap.has(obj)) {
        return <T>copiedMap.get(obj);
    }

    const initValue: T = {} as T;

    Object.keys(obj).forEach((key) => {
        initValue[key] = baseClone(obj[key], copiedMap);
    });

    return initValue;
}

/**
 * Handle different type clone
 */
function baseClone<T>(item: T, copiedMap: CopyMap) {
    if (isArray(item)) {
        const value = <typeof item>cloneArray(item, copiedMap);
        copiedMap.set(item, value);
        return value;
    } else if (isPlainObject(item)) {
        const value = cloneObject(item, copiedMap) as T;
        copiedMap.set(item, value);
        return value;
    }
    return item;
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