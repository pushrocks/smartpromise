export interface IResolve<T> {
  (value?: T | Promise<T>): void;
}

export interface IReject {
  (reason?: any): void;
}

export type TDeferredStatus = 'pending' | 'fulfilled' | 'rejected';

export class Deferred<T> {
  public promise: Promise<T>;
  public resolve: IResolve<T>;
  public reject: IReject;
  public status: TDeferredStatus;

  public startedAt: number;
  public stoppedAt: number;
  public get duration(): number {
    if (this.stoppedAt) {
      return this.stoppedAt - this.startedAt;
    } else {
      return Date.now() - this.startedAt;
    }
  }

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = (valueArg: T | PromiseLike<T>) => {
        this.status = 'fulfilled';
        this.stoppedAt = Date.now();
        resolve(valueArg);
      };
      this.reject = (reason: any) => {
        this.status = 'rejected';
        this.stoppedAt = Date.now();
        reject(reason);
      };
      this.startedAt = Date.now();
      this.status = 'pending';
    });
  }
}

export let defer = <T>() => {
  return new Deferred<T>();
};

/**
 * Creates a new resolved promise for the provided value.
 */
export let resolvedPromise = <T>(value?: T): Promise<T> => {
  return Promise.resolve(value);
};

/**
 * Creates a new rejected promise for the provided reason.
 */
export let rejectedPromise = err => {
  return Promise.reject(err);
};

interface IAsyncFunction<T> {
  (someArg: T): Promise<T>;
}

export let map = async <T>(inputArg: T[], functionArg: IAsyncFunction<T>) => {
  let promiseArray: Promise<any>[] = [];
  let resultArray = [];
  for (let item of inputArg) {
    let promise: Promise<any> = functionArg(item);
    promiseArray.push(promise);
    promise.then(x => {
      resultArray.push(x);
    });
  }
  await Promise.all(promiseArray);
  return resultArray;
};
