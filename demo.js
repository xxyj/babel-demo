"use strict";

var _demo = require("./demo3.js");

var a = 1;
(0, _demo.test)([2]);
"use strict";

var _demo = require("./demo3.js");

var b = function b() {
  return 33;
};

(0, _demo.test)([1]);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.test = test;

function test(arr) {
  arr.map(function (item) {
    console.log(item);
    return item * 10;
  });
}
