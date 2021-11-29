function main(input) {
    const [a, b, c] = input.trim().split(" ")
    const num = 21 - a - b - c
    
    console.log(num)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))