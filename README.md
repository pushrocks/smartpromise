# smartq
dropin replacement for q

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartq)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smartq)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartq)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartq/)

## Status for master
[![build status](https://GitLab.com/pushrocks/smartq/badges/master/build.svg)](https://GitLab.com/pushrocks/smartq/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smartq/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smartq/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartq.svg)](https://www.npmjs.com/package/smartq)
[![Dependency Status](https://david-dm.org/pushrocks/smartq.svg)](https://david-dm.org/pushrocks/smartq)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartq/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartq/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartq/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartq)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

> Note: smartq uses native ES6 promises

```javascript
import * as q from 'smartq'

let myAsyncFunction = (): Promise<string> => {
    let done = q.defer<string>() // returns your typical Deferred object
    setTimeout(() => {
        done.resolve('hi') // will throw type error for other types than string as argument ;)
    },6000)
    return done.promise
}

let myAsyncFunction2 = async () => {
    let aString = await myAsyncFunction()
    console.log(aString) // will log 'hi' to console
}

myAsyncFunction2();
q.all(myAsyncFunction(), myAsyncFunction2())
    .then(() => {
        console.log('all promises for q.all have been fullfilled')
    })

q.race(/* some promises here */)
    .then(() => {
        console.log('at least one promise for q.race is fullfilled')
    })

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

```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
