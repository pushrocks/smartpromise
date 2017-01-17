import 'typings-global';
export interface IResolve<T> {
    (value?: T | Promise<T>): void;
}
export interface IReject {
    (reason?: any): void;
}
export declare class Deferred<T> {
    promise: Promise<T>;
    resolve: IResolve<T>;
    reject: IReject;
    constructor();
}
export declare let defer: <T>() => Deferred<T>;
export declare let all: () => void;
