const traverse = require('@babel/traverse')
const parser = require('@babel/parser')
const code = `n * n;`
let ast = parser.parse(code)
console.dir(JSON.stringify(ast))
traverse(ast, {
  enter(path) {
    if (path.node.type === 'Identifier' && path.node.name === 'n') {
      path.node.name = '2'
    }
  },
})
