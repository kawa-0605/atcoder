function main(input) {
    let arr = input.trim().split("\n").slice(1)
    arr = Array.from(new Set(arr))
    console.log(arr.length)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))