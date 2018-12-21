const  parser = require("@babel/parser");
    const code = `function square(n) {
  return n * n;
}`;
console.dir(parser.parse(code));