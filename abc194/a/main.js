function main(input) {
    const [a, b] = input.trim().split(" ").map(Number)

    const c = a + b

    if (c >= 15 && b >= 8) {
        console.log(1)
    } else if (c >= 10 && b >= 3) {
        console.log(2)
    } else if (c >= 3) {
        console.log(3)
    } else {
        console.log(4)
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))