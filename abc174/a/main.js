function Main(input) {
  console.log(input >= 30 ? 'Yes' : 'No')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
