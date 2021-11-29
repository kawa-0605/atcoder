function main(input) {
    const [s, t] = input.split("\n")
    let cnt = 0;

    if (s !== t) {
       for (let i = 0; i <= s.length; i++) {
           if (s.charAt(i) !== t.charAt(i)) {
               cnt++
           }
       } 
    }
    console.log(cnt)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"))