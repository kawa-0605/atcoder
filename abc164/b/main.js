function main(input) {
    let [t_hp, t_at, a_hp, a_at] = input.trim().split(" ").map(Number)
    let turn = 0

    while(t_hp > 0 && a_hp > 0) {
        if (turn % 2 === 0) {
            a_hp -= t_at
        } else {
            t_hp -= a_at
        }
        turn++
    }

    console.log(t_hp > 0 ? 'Yes' : 'No')
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))