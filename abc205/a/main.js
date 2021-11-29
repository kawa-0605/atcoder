function main(input) {
    const [a, b] = input.trim().split(" ")

    const num = a * b / 100
    console.log(num)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))