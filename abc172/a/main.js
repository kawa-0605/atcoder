function main(input) {
    const a = input.trim().split(" ").map(Number)

    const ans = a[0] + a[0] ** 2 + a[0] ** 3
    console.log(ans)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))