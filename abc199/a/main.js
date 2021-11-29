function main(input) {
    const [a, b, c] = input.trim().split(" ")

    if (a * a + b * b < c * c) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))