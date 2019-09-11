import { expect, tap } from '@pushrocks/tapbundle';
import * as q from '../ts/index';

tap.test('should return a Deferred for .defer()', async () => {
  let myDeferred = q.defer();
  let expectPromise = expect(myDeferred.promise).to.eventually.be.fulfilled;
  myDeferred.resolve();
  return expectPromise;
});

tap.test('should let types flow through the Promise', async () => {
  let myString = 'someString';
  let myDeferred = q.defer<string>();
  let expectPromise = expect(myDeferred.promise).to.eventually.equal('someString');
  myDeferred.resolve(myString);
  return expectPromise;
});

tap.test('should map callbacks', async () => {
  let inputArray = ['hi', 'awesome'];
  const myPromisified = async myInput => {
    return myInput;
  };
  const expectPromise = expect(q.map(inputArray, myPromisified)).to.eventually.deep.equal(
    inputArray
  );
  return expectPromise;
});

tap.start();
