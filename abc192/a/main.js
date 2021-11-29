function main(input) {
    console.log(100 - input % 100)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))