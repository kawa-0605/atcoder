function Main(input) {
  input = input.split('\n')[0].split('')
  const a = [...new Set(input)];
  console.log(
    a.length == 1 ? 1 :
    a.length == 2 ? 3 : 6
  )
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
