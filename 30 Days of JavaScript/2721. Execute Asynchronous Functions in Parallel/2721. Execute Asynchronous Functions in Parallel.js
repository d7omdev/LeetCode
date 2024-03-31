//Problem link: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
