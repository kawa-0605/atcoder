function Main(input) {
  const[a, b] = input.trim().split('\n')[0].split(' ').map(Number)
  let ans = 0

  if (a < b) {
    ans = b - a + 1
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
