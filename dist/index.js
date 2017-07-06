"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const util = require("util");
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
 * Creates a new resolved promise for the provided value.
 */
exports.resolvedPromise = (value) => {
    return Promise.resolve(value);
};
/**
 * Creates a new rejected promise for the provided reason.
 */
exports.rejectedPromise = (err) => {
    return Promise.reject(err);
};
// native promisify
exports.promisify = util.promisify;
exports.map = (inputArg, functionArg) => __awaiter(this, void 0, void 0, function* () {
    let promisifedFunction = exports.promisify(functionArg);
    let promiseArray = [];
    let resultArray = [];
    for (let item of inputArg) {
        let promise = promisifedFunction(item);
        promiseArray.push(promise);
        promise.then(x => {
            resultArray.push(x);
        });
    }
    yield Promise.all(promiseArray);
    return resultArray;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMEJBQXVCO0FBQ3ZCLDZCQUE0QjtBQVU1QjtJQUlFO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGO0FBVkQsNEJBVUM7QUFFVSxRQUFBLEtBQUssR0FBRztJQUNqQixNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUssQ0FBQTtBQUMxQixDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsZUFBZSxHQUFHLENBQUksS0FBUztJQUN4QyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUMvQixDQUFDLENBQUE7QUFFRDs7R0FFRztBQUNRLFFBQUEsZUFBZSxHQUFHLENBQUMsR0FBRztJQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUM1QixDQUFDLENBQUE7QUFFRCxtQkFBbUI7QUFDUixRQUFBLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFBO0FBQzFCLFFBQUEsR0FBRyxHQUFHLENBQVcsUUFBYSxFQUFDLFdBQVc7SUFDbkQsSUFBSSxrQkFBa0IsR0FBRyxpQkFBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLElBQUksWUFBWSxHQUFtQixFQUFFLENBQUE7SUFDckMsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBQ3BCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxPQUFPLEdBQWlCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3BELFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1osV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFDRCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQTtBQUNwQixDQUFDLENBQUEsQ0FBQSJ9