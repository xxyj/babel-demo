var babel = require('@babel/core')
var t = require('@babel/types')
const visitor = {
  //    * 数组添加
  //    numberAdd([23])
  CallExpression(path) {
    if (t.isIdentifier(path.node.callee, { name: 'numberAdd' })) {
      let num = 0
      for (let key of path.node.arguments[0].elements) {
        if (key.type === 'NumericLiteral') {
          num += key.value
        }
      }
      path.replaceWith(t.NumericLiteral(num))
      //   path.replaceWithSourceString(`最终的结果是${num}`);
    }
  },
  // 转换箭头行数
  ArrowFunctionExpression(path) {
    let { node } = path
    let body = node.body
    let params = node.params
    let r = t.functionExpression(null, params, body, false, false)
    path.replaceWith(r)
  },
  Identifier: {
    enter(path) {
      console.log('我是进入的：', path.node.name)
    },
    exit(path) {
      console.log('我是退出的：', path.node.name)
    },
  },
}

// const code = `numberAdd([1,3,5,6,7,8])`
const code = `let test = (a,b)=>{return a+b}`
const result = babel.transform(code, {
  plugins: [
    {
      visitor
    },
  ],
})
console.log(result.code)
