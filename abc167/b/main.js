function Main(input) {
  let [a, b, c, k] = input.split('\n')[0].split(' ').map(Number)

  if (k <= a) {
    console.log(k)
  } else if (k - a <= b) {
    console.log(a)
  } else {
    console.log(a - (k - a - b))
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
