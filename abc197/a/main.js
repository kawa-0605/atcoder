function Main(input) {
  const [a, b, c] = input.split('\n')[0]
  console.log(b + c + a)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
