/**
 * @export
 * @param {any} babel 
 * @returns 
 */
var t = require('@babel/types');
var babel = require('@babel/core');

const code = babel.template(`var a = 1;`);
 
console.log(code())
