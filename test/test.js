"use strict";
require("typings-test");
const should = require("should");
const q = require("../dist/index");
describe('smartq', function () {
    it('should return a Deferred for .defer()', function (done) {
        let myDeferred = q.defer();
        myDeferred.promise.then(() => {
            done();
        });
        myDeferred.resolve();
    });
    it('should let types flow through the Promise', function (done) {
        let myString = 'someString';
        let myDeferred = q.defer();
        myDeferred.promise.then(x => {
            should(x).equal('someString');
            done();
        });
        myDeferred.resolve(myString);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUVyQixpQ0FBZ0M7QUFDaEMsbUNBQWtDO0FBRWxDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7SUFDZixFQUFFLENBQUMsdUNBQXVDLEVBQUUsVUFBUyxJQUFJO1FBQ3JELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUMxQixVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO1FBQ0YsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDJDQUEyQyxFQUFFLFVBQVMsSUFBSTtRQUN6RCxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUE7UUFDM0IsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBVSxDQUFBO1FBQ2xDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUM3QixJQUFJLEVBQUUsQ0FBQTtRQUNWLENBQUMsQ0FBQyxDQUFBO1FBQ0YsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNoQyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=