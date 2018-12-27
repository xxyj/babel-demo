var t = require('@babel/types')
var babel = require('@babel/core')

const xx = {
  Identifier(path, state) {
    console.log(state)
    if (path.node.name === this.paramName) {
      path.node.name = 'c'
    }
  },
}
// 删除某个函数
const visitor = {
  /**
     * @param {any} path 
     * @param {any} state 
     */
  FunctionDeclaration(path, state) {
    console.log(state)
    for (var key of path.node.params) {
      key.name = key.name === 'a' ? 'c' : key.name
    }
    path.traverse(xx, { paramName: 'a' })
  },
}

const code = `function add(a,b){return a+b} var a=1`
const result = babel.transform(code, {
  plugins: [
    {
      visitor,
    },
  ],
})
console.log(result.code)
