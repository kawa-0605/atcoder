function main(input) {
    const [a, b, c] = input.trim().split(" ").map(Number)

    const ans = a - b + c
    console.log(ans)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))