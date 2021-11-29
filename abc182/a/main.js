function main(input) {
    const [a, b] = input.trim().split(" ").map(Number)

    const ans = 2 * a + 100 - b
    console.log(ans)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))