function main(input) {
    const arr = input.split("\n").slice(1)
    let ac = 0
    let wa = 0
    let tle = 0
    let re = 0

    for (key of arr) {
        switch(key) {
            case 'AC':
                ac++
                break
            case 'WA':
                wa++
                break
            case 'TLE':
                tle++
                break
            case 'RE':
                re++
                break
        }
    }

    console.log(`
        AC x ${ac}
        WA x ${wa}
        TLE x ${tle}
        RE x ${re}
    `)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))