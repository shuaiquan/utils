import { isArray } from "../is";

export function flatten(arr: any[], flattenNum: number = 1) {
    const newArr: any[] = [];
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        const item = arr[i];
        if (isArray(item)) {
            newArr.push(...item);
        } else {
            newArr.push(item);
        }
    }

    return flattenNum <= 1 ? newArr : flatten(newArr, flattenNum - 1);
}