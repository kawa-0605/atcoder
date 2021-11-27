#  javascript

## 配列
```JavaScript
// 配列の宣言
let a = [1, 2, 3]
let b = new Array(3) // サイズ3の配列を宣言
let c = new Array(3, 4, 5, 6, 7) // => [3, 4, 5, 6, 7]
let d = [] // => 空の配列
let e = new Array() // => 空の配列

// 配列の要素数
let length = a.length // 3

// 配列の連結
a.concat(4, 5) // [1, 2, 3, 4, 5]
a.concat([4, 5]) // [1, 2, 3, 4, 5]
a.concat([4, 5], [6, 7]) // [1, 2, 3, 4, 5, 6, 7]

// 配列 → 文字列(デフォルトはカンマ)
a.join() // '1,2,3'
a.join(':') // '1:2:3'

// 配列の末尾に要素を追加、追加後の配列のサイズを返す
a.push(7) // 4 (a = [1, 2, 3, 7])
// 配列の末尾の要素を取り除きその値を返す
a.pop() // 7 (a = [1, 2, 3])
// 配列の先頭に要素を追加、追加後の配列のサイズを返す
a.unshift(10) // 4 (a = [10, 1, 2, 3])
// 配列の先頭の要素を取り除いてその値を返す
a.shift() // 10 (a = [1, 2, 3])

// 逆順にする
a.reverse() // [3, 2, 1]
//　ソートする(文字列は辞書順)
a.sort // [1, 2, 3]
['abs', 'abc', 'a', 'c', 'bc', 'b'].sort(); // ['a', 'abc', 'abs', 'b', 'bc', 'c']

// 配列の連続する要素を切り出して返す
let a = [1, 2, 3, 4, 5]
a.slice(1, 3) // [2, 3]
a.slice(2) // [3, 4, 5]
```

## 文字列
```JavaScript
// 文字列の宣言
let s = 'hello'
let t = String('piyopiyo')

// 文字列の連結
'hoge' + 'piyo' // 'hogepiyo'

// 文字列の長さを返す
s.length // 5
// 1文字を抜き出す
t.charAt(2) // 'y'

// 文字列の検索
// indexOf(key, index) で位置index(省略すると0)から文字列keyを検索して最初に見つかった位置を返す (見つからなかったときは-1を返す)
s.indexOf('ll', 0) // 2
t.indexOf('pi') // 0
// last.IndexOf(key, index) で位置index(省略すると0)から文字列keyを逆順に検索して最初に見つかった位置を返す (見つからなかったときは-1を返す)
t.lastIndexOf('pi') // 4

// 文字列の一部を抜き出す (元の文字列は変更しません)
// slice(start, end) で位置startからend-1まで抜き出せます (endを省略すると最後まで)
s.slice(1, 4); // => 'ell'
s.silce(1); // => 'ello'
// substr(index, k) で位置indexからk文字抜き出します (kを省略すると最後まで)
t.substr(4, 2); // => 'pi'
t.substr(4); // => 'piyo'

// 小文字に変換
'AbCdEf'.toLowerCase() // 'abcdef'
// 大文字に変換
'AbCdEf'.toUpperCase() // 'ABCDEF'

// 文字列 → 配列
let d = '2021/11/27'
d.split('/') // ['2021', '11', '27']
d.aplit('') // ['2', '0', '2', '1', '/', '1', '1', '/', '2', '7']
```

## 型変換
```JavaScript
// 数値 → 文字列
let a = 12
a.toString() // '12'
a.toString(2) // '1100' (2進数)
a.toString(16) // 'c' (16進数)

// 文字列 → 数値
parseFloat('3.14') // 3.14
parseInt('12') // 12
parseInt('1111', 2) // 15 (第二引数に基数の2を渡すと2進数として数値に変換する)
parseInt('ff', 16) // 255

// 文字列を引数にとって式を評価した値を返す
eval('1+2') // 3
eval('35') // 35
eval('[1, 2, 3]') // [1, 2, 3]
```

## 数学関数
```JavaScript
Math.abs(-1) // 1
// 最大値
Math.max(3, 5) // 5
// 最小値
Math.min(3, 5) // 3
// 平方根
Math.sqrt(2) // 1.4142135623730951
// 累乗
Math.pow(2, 3) // 8
// eの累乗
Math.exp(2) // 7.38905609893065
// 自然対数
Math.log(3) // 1.0986122886681098
// 小数点以下を切り上げ
Math.ceil(4.7); // 5
Math.ceil(-4.7); // -4
//小数点以下を切り下げ
Math.floor(4.7); // 4  
Math.floor(-4.7); // -5
// 小数点以下を四捨五入
Math.round(4.7); // 5
Math.round(4.2); // 4
Math.round(-4.7); // -5
Math.round(-4.2); // -4
```