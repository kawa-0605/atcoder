function Main(input) {
  const [a, b] = input.split('\n')[0].split(' ').map(Number)
  const [c, d] = input.split('\n')[1].split(' ').map(Number)
  console.log(b - c)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
