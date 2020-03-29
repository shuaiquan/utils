export enum Tag {
    ArrayTag = '[object Array]',
    ObjectTag = '[object Object]',
    ErrorTag = '[object Error]',
    Promise = '[object Promise]',
    SetTag = '[object Set]',
    MapTag = '[object Map]',
    WeakSetTag = '[object WeakSet]',
    WeakMapTag = '[object WeakMap]',
    SymbolTag = '[object Symbol]',
}

export function getValueTag(value: any) {
    return Object.prototype.toString.call(value);
}
