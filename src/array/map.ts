interface MapCallBack<T, K> {
    (item: T, index: number, arr: T[]): K;
}

export function map<T, K>(arr: T[], cb: MapCallBack<T, K>) {
    const newArr: K[] = [];
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        newArr.push(cb(arr[i], i, arr));
    }
    return newArr;
}
