import { expect, tap } from '@pushrocks/tapbundle';
import * as smartpromise from '../ts/index';

tap.test('should return a Deferred for .defer()', async () => {
  const myDeferred = smartpromise.defer();
  const expectPromise = expect(myDeferred.promise).to.eventually.be.fulfilled;
  myDeferred.resolve();
  return expectPromise;
});

tap.test('should let types flow through the Promise', async () => {
  const myString = 'someString';
  const myDeferred = smartpromise.defer<string>();
  const expectPromise = expect(myDeferred.promise).to.eventually.equal('someString');
  myDeferred.resolve(myString);
  return expectPromise;
});

tap.test('should map callbacks', async () => {
  const inputArray = ['hi', 'awesome'];
  const myPromisified = async myInput => {
    return myInput;
  };
  const expectPromise = expect(smartpromise.map(inputArray, myPromisified)).to.eventually.deep.equal(
    inputArray
  );
  return expectPromise;
});

tap.start();
