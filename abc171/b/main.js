function Main(input) {
  let f = function(a, b) {
    return a - b
  }
  let ans = 0
  // maxTypeいらんかった...
  let [maxType, selectionType] = input.split('\n')[0].split(' ').map(Number)
  let priceArr = input.split('\n')[1].split(' ').map(Number).sort(f)

  for (let i = 0; i < selectionType; i++){
    ans += priceArr[i]
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
