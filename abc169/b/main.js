function Main(input) {
  let arr = input.split('\n')[1].split(' ').map(Number).sort()
  const max = BigInt(10 ** 18)

  let ans = 1n
  for(num of arr) {
    ans *= BigInt(num)
    if (ans > max) {
      ans = -1
      break
    }
  }

  console.log(ans.toString())

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
