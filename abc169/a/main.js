function Main(input) {
  const [a, b] = input.split('\n')[0].split(' ').map(Number)
  console.log(a * b)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
