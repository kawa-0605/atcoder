function main(input) {
    const arr = input.split('\n').slice(1, -1).map(n => Number(n))

    arr.sort((a, b) => a - b)
    console.log(arr[0])
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))