function main(input) {
    let arr = input.trim().split(" ").map(Number)
    let ans = 0

    arr = arr.sort(function(a, b) {
        return b - a
    })
    ans = arr[0] + arr [1]
    console.log(ans)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))