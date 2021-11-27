function Main(input) {
  const[a, b] = input.trim().split('\n')[0].split(' ').map(Number)
  console.log(a === b ? a : 3 - a - b)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
