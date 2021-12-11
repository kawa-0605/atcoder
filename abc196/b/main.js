function Main(input) {
  console.log(input.split('\n')[0].split(' ')[0].split('.')[0])
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
