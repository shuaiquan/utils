interface ForEachCallBack<T> {
    (value: T, index: number, arr: T[]): void;
}

export function forEach<T>(arr: T[], func: ForEachCallBack<T>) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        func.call(arr, arr[i], i, arr);
    }
}
