/**
 * @export
 * @param {any} babel 
 * @returns 
 */
var t = require('@babel/types')
var babel = require('@babel/core')

// 给每个函数增加一个注释
const visitor = {
  /**
     * @param {any} path 
     * @param {any} state 
     */
  FunctionDeclaration(path, state) {
     let str = 
      `*
  * function ${path.node.id.name}
      `
      for (var key of path.node.params) {
str+=`* @param {any} ${key.name}
  `
       }
      path.addComment('leading',str)
      path.addComment('trailing','function end',true)
      console.log(path.node.trailingComments)
  },
}

const code = `function add(a,b){return a+b}`
const result = babel.transform(code, {
  plugins: [
    {
      visitor,
    },
  ],
})
console.log(result.code)
