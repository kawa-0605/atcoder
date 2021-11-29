function main(input) {
    const a = input.trim().split(" ")

    let num = 0
    if (a % 1000 !== 0) {
        num = 1000 - a % 1000
    }
    console.log(num)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))