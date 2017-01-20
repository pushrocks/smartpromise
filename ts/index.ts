import 'typings-global'

export interface IResolve<T> {
    (value?: T | Promise<T>): void
}

export interface IReject {
    (reason?: any): void
}

export class Deferred<T> {
    promise: Promise<T>
    resolve: IResolve<T>
    reject: IReject
    constructor() {
        this.promise = new Promise<T>((resolve, reject) => {
            this.resolve = resolve
            this.reject = reject
        })
    }
}

export let defer = <T>() => {
    return new Deferred<T>()
}

/**
 * Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
 */
export let all = Promise.all

/**
 * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
 */
export let race = Promise.race

/**
 * Creates a new resolved promise for the provided value.
 */
export let resolvedPromise = Promise.resolve

/**
 * Creates a new rejected promise for the provided reason.
 */
export let rejectedPromise = Promise.reject
