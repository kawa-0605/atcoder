function main(input) {
    const a = input.trim().split(' ')
    const str = a[0].replace(/[aiueo]/g, '')
    console.log(str)
}
main(require("fs").readFileSync("/dev/stdin", "utf8"))