/**
 * @export
 * @param {any} babel 
 * @returns 
 */
var t = require('@babel/types')
var babel = require('@babel/core')

// 删除某个函数
const visitor = {
  /**
     * @param {any} path 
     * @param {any} state 
     */
  FunctionDeclaration(path, state) {
    if (t.isIdentifier(path.node.id, { name: 'add' })) {
        path.remove()
    }
  },
}

const code = `function add(a,b){return a+b} function add2(a,b){return a+b}`
const result = babel.transform(code, {
  plugins: [
    {
      visitor,
    },
  ],
})
console.log(result.code)
