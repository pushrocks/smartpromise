# @pushrocks/smartpromise

simple promises and Deferred constructs

## Availabililty and Links

- [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartpromise)
- [gitlab.com (source)](https://gitlab.com/pushrocks/smartpromise)
- [github.com (source mirror)](https://github.com/pushrocks/smartpromise)
- [docs (typedoc)](https://pushrocks.gitlab.io/smartpromise/)

## Status for master

[![build status](https://gitlab.com/pushrocks/smartpromise/badges/master/build.svg)](https://gitlab.com/pushrocks/smartpromise/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartpromise/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartpromise/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartpromise.svg)](https://www.npmjs.com/package/@pushrocks/smartpromise)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartpromise/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartpromise)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

> Note: smartq uses native ES6 promises
> smartq does not repeat any native functions, so for things like .all() simply use Promise.all()

```typescript
import * as q from '@pushrocks/smartpromise'

// Deferred
// -----------------------------------------------
let myAsyncFunction = (): Promise<string> => {
  let done = q.defer<string>() // returns your typical Deferred object
  setTimeout(() => {
      done.resolve('hi') // will throw type error for other types than string as argument ;)
  },6000);

  console.log(done.status) // logs "pending";
  done.promise.then(() => {
    console.log(done.status) // logs "fullfilled"
    console.log(done.duration) // logs the milliseconds between instantiation and fullfillment
  })

  return done.promise
}

let myAsyncFunction2 = async () => {
    let aString = await myAsyncFunction()
    console.log(aString) // will log 'hi' to console
}

myAsyncFunction2();


// Resolved and Rejected promises
// ------------------------------------------------
q.resolvedPromise(`I'll get logged to console soon`)
    .then(x => {
        console.log(x)
    })

q.rejectedPromise(`what a lovely error message`)
    .then(() => {
        console.log('This never makes it to console')
    }/*, alternatively put a reject function here */)
    .catch(err => {
        console.log(err)
    })

// Promisify (typed)
// ------------------------------------------------

let myCallbackedFunction = (someString: string, someNumber: number, cb) => {
    cb(null, someString)
}

let myPromisedFunction = q.promisify(myCallbackFunction)
myPromisedFunction('helloThere', 2).then(x => {
    console.log(x) // will log 'helloThere' to console
})
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
