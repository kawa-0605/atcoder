function main(input) {
    const a = input.trim().split(" ").map(Number)

    switch (a[0]) {
        case 0:
            console.log(1)
            break
        case 1:
            console.log(0)
            break
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))