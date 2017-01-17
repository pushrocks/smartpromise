import 'typings-test'

import * as should from 'should'
import * as q from '../dist/index'

describe('smartq', function() {
    it('should return a Deferred for .defer()', function(done) {
        let myDeferred = q.defer()
        myDeferred.promise.then(() => {
            done()
        })
        myDeferred.resolve()
    })

    it('should let types flow through the Promise', function(done) {
        let myString = 'someString'
        let myDeferred = q.defer<string>()
        myDeferred.promise.then(x => {
            should(x).equal('someString')
            done()
        })
        myDeferred.resolve(myString)
    })
})