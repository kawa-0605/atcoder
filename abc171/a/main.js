function main(input) {
    if (input.match(/[a-z]/)) {
        console.log('a')
    } else if(input.match(/[A-Z]/)) {
        console.log('A')
    }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))