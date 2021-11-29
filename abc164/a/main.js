function main(input) {
    const [a, b] = input.trim().split(" ").map(Number)
    
    if (a > b) {
        console.log('safe')
    } else {
        console.log('unsafe')
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))