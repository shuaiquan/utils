export function reverse<T>(arr: T[]) {
    const length = arr.length;
    const newArr: T[] = [];
    for (let i = 0; i < length; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
