import { isFunc } from "../is/types";

interface RemoveCallBack<T> {
    (a: T, b: T): boolean;
}

export function remove<T>(arr: T[], target: T, func?: RemoveCallBack<T>) {
    if (isFunc(arr.findIndex)) {
        const index = arr.findIndex((value) => func ? func(value, target) : value === target);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    } else {
        removeCompatible(arr, target, func);
    }
}

function removeCompatible<T>(arr: T[], target: T, func?: RemoveCallBack<T>) {
    const length = arr.length;
    const cb = func || function (a: T, b: T) {
        return a === b;
    }
    // 就兼容性来讲，indexOf 就足够了，只不过 indexOf 没有办法自定义比较函数
    for (let i = 0; i < length; i++) {
        if (cb(arr[i], target)) {
            arr.splice(i, 1);
            break;
        }
    }
}