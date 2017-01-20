"use strict";
require("typings-global");
class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
exports.Deferred = Deferred;
exports.defer = () => {
    return new Deferred();
};
/**
 * Creates a Promise that is resolved with an array of results when all of the provided Promises resolve, or rejected when any Promise is rejected.
 */
exports.all = Promise.all;
/**
 * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
 */
exports.race = Promise.race;
/**
 * Creates a new resolved promise for the provided value.
 */
exports.resolvedPromise = Promise.resolve;
/**
 * Creates a new rejected promise for the provided reason.
 */
exports.rejectedPromise = Promise.reject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBVXZCO0lBSUk7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFJLENBQUMsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDeEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0o7QUFWRCw0QkFVQztBQUVVLFFBQUEsS0FBSyxHQUFHO0lBQ2YsTUFBTSxDQUFDLElBQUksUUFBUSxFQUFLLENBQUE7QUFDNUIsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDUSxRQUFBLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFBO0FBRTVCOztHQUVHO0FBQ1EsUUFBQSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQTtBQUU5Qjs7R0FFRztBQUNRLFFBQUEsZUFBZSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUE7QUFFNUM7O0dBRUc7QUFDUSxRQUFBLGVBQWUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBIn0=