import { isObject } from "../is/types";

/**
 * 对一个对象进行深度冻结
 * @param object 要进行深度冻结的对象
 */
export function deepFreeze(object: Object) {
    if (!isObject) {
        return object;
    }

    Object.keys(object).forEach(key => {
        const value = object[key];

        if (isObject(value)) {
            object[key] = deepFreeze(value);
        }
    });

    return Object.freeze(object);
}