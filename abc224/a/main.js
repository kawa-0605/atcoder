function Main(input) {
  const arr  = input.split('\n')[0].split('')
  console.log(arr.pop() === 'r' ? 'er' : 'ist')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
