function main(input) {
    const [a, b, c] = input.trim().split(" ")
    
    if (a === b) {
        console.log(c)
    } else if (b === c) {
        console.log(a)
    } else if (a === c) {
        console.log(b)
    } else {
        console.log(0)
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))