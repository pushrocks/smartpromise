# @pushrocks/smartpromise
simple promises and Deferred constructs

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartpromise)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartpromise)
* [github.com (source mirror)](https://github.com/pushrocks/smartpromise)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartpromise/)

## Status for master

Status Category | Status Badge
-- | --
GitLab Pipelines | [![pipeline status](https://gitlab.com/pushrocks/smartpromise/badges/master/pipeline.svg)](https://lossless.cloud)
GitLab Pipline Test Coverage | [![coverage report](https://gitlab.com/pushrocks/smartpromise/badges/master/coverage.svg)](https://lossless.cloud)
npm | [![npm downloads per month](https://badgen.net/npm/dy/@pushrocks/smartpromise)](https://lossless.cloud)
Snyk | [![Known Vulnerabilities](https://badgen.net/snyk/pushrocks/smartpromise)](https://lossless.cloud)
TypeScript Support | [![TypeScript](https://badgen.net/badge/TypeScript/>=%203.x/blue?icon=typescript)](https://lossless.cloud)
node Support | [![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
Code Style | [![Code Style](https://badgen.net/badge/style/prettier/purple)](https://lossless.cloud)
PackagePhobia (total standalone install weight) | [![PackagePhobia](https://badgen.net/packagephobia/install/@pushrocks/smartpromise)](https://lossless.cloud)
PackagePhobia (package size on registry) | [![PackagePhobia](https://badgen.net/packagephobia/publish/@pushrocks/smartpromise)](https://lossless.cloud)
BundlePhobia (total size when bundled) | [![BundlePhobia](https://badgen.net/bundlephobia/minzip/@pushrocks/smartpromise)](https://lossless.cloud)
Platform support | [![Supports Windows 10](https://badgen.net/badge/supports%20Windows%2010/yes/green?icon=windows)](https://lossless.cloud) [![Supports Mac OS X](https://badgen.net/badge/supports%20Mac%20OS%20X/yes/green?icon=apple)](https://lossless.cloud)

## Usage

Use TypeScript for best in class instellisense.

> Note: smartq uses native ES6 promises
> smartq does not repeat any native functions, so for things like .all() simply use Promise.all()

```typescript
import * as q from '@pushrocks/smartpromise';

// Deferred
// -----------------------------------------------
let myAsyncFunction = (): Promise<string> => {
  let done = q.defer<string>(); // returns your typical Deferred object
  setTimeout(() => {
    done.resolve('hi'); // will throw type error for other types than string as argument ;)
  }, 6000);

  console.log(done.status); // logs "pending";
  done.promise.then(() => {
    console.log(done.status); // logs "fullfilled"
    console.log(done.duration); // logs the milliseconds between instantiation and fullfillment
  });

  return done.promise;
};

let myAsyncFunction2 = async () => {
  let aString = await myAsyncFunction();
  console.log(aString); // will log 'hi' to console
};

myAsyncFunction2();

// Resolved and Rejected promises
// ------------------------------------------------
q.resolvedPromise(`I'll get logged to console soon`).then((x) => {
  console.log(x);
});

q.rejectedPromise(`what a lovely error message`)
  .then(
    () => {
      console.log('This never makes it to console');
    } /*, alternatively put a reject function here */
  )
  .catch((err) => {
    console.log(err);
  });

// Promisify (typed)
// ------------------------------------------------

let myCallbackedFunction = (someString: string, someNumber: number, cb) => {
  cb(null, someString);
};

let myPromisedFunction = q.promisify(myCallbackFunction);
myPromisedFunction('helloThere', 2).then((x) => {
  console.log(x); // will log 'helloThere' to console
});
```


## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
