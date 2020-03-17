interface ReduceCallBack<T> {
    (accumulator: T, currentValue: T, index: number, arr: T[]): T;
}

export function reduce<T>(arr: T[], reducer: ReduceCallBack<T>, initialValue?: T) {
    let i = initialValue === undefined ? 0 : 1;
    let accumulator: T = initialValue === undefined ? arr[i] : initialValue;

    const length = arr.length;

    for (; i < length; i++) {
        accumulator = reducer(accumulator, arr[i], i, arr);
    }
    return accumulator;
}
