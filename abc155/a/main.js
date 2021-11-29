function main(input) {
    const [a, b, c] = input.trim().split(" ").map(Number)

    if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))