var babel = require('@babel/core')
var t = require('@babel/types')
const visitor = {
  VariableDeclaration(path, state) {
    if (path.node.kind === 'let') {
      path.node.kind = 'var'
      const bindings = path.getBindingIdentifiers()
      for (var key in bindings) {
        let i = 0
        while (++i) {
          let re = i === 1 ? `_${key}` : `_${key}${i}`
          if (!path.scope.hasBinding(re)) {
            path.scope.rename(key, re)
            break
          }
        }
      }
    }
  },
}

// const code = `numberAdd([1,3,5,6,7,8])`
const code = ` function test(){
     let a
     var _a
     a++
 }
function test2(){
  var _a2
}
a=3`
const result = babel.transform(code, {
  plugins: [
    {
      visitor,
    },
  ],
})
console.log(result.code)
