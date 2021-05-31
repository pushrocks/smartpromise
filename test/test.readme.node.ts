import * as smartpromise from '../ts'; 

// using Deferreds
// simple deferred;
const done = smartpromise.defer();
done.promise.then((stringArg) => {
  console.log(stringArg);
});
done.resolve('hello') // whenever you are ready


// using deferreds in async functions to cater callback style apis
const myAsyncFunction = async (): Promise<string> => {
  const done = smartpromise.defer<string>(); // returns your typical Deferred object
  setTimeout(() => {
    done.resolve('hi'); // will throw type error for other types than string as argument ;)
  }, 6000);

  console.log(done.status); // logs "pending";
  await done.promise;
  console.log(done.status); // logs "fullfilled"
  console.log(done.duration); // outputs the duration in millisenconds

  return done.promise;
};

let myAsyncFunction2 = async () => {
  let aString = await myAsyncFunction();
  console.log(aString); // will log 'hi' to console
};

myAsyncFunction2();

// Resolved and Rejected promises
// ------------------------------------------------
smartpromise.resolvedPromise(`I'll get logged to console soon`).then((x) => {
  console.log(x);
});

smartpromise
  .rejectedPromise(`what a lovely error message`)
  .then(
    () => {
      console.log('This never makes it to console');
    } /*, alternatively put a reject function here */
  )
  .catch((err) => {
    console.log(err);
  });

import {tap, expect } from '@pushrocks/tapbundle';

tap.test('runs through', async () => {})
tap.start();