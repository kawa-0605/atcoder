function Main(input) {
  console.log(input > 0 && input % 100 == 0 ? 'Yes' : 'No')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
