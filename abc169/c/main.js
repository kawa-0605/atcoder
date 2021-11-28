function Main(input) {
  let [a, b] = input.split('\n')[0].split(' ')
  a = BigInt(a)
  b = BigInt(b.replace('.', ''))
  let ans = a * b / 100n
  console.log(ans.toString())
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));