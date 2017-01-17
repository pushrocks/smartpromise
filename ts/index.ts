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


export let all = () => {

}