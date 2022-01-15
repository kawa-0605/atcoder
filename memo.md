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
d.split('') // ['2', '0', '2', '1', '/', '1', '1', '/', '2', '7']
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

#  java

## 文字列
```Java
String str = "文字列"

// 長さ
str.length();
// startからend-1の切り取り
str.subString(start, end);
// 同値判定
str1.equals(str2);
// 比較
str1.compareTo(str2)

// String -> char i番目の文字
char c = str.charAt(i);
// String -> char 全体
char[] cs = str.toCharArray();
```

## 型変換
```Java
// String -> int
int i = Integer.parseInt(str);
// double -> int
int i = (int) d;

// String -> double
double d = Double.parseDouble(str);
// int -> double
double d = (double) i;

// int -> String
String s = String.valueOf(i);
// double -> String
String s = String.valueOf(d);
```

## 数値処理
```Java
// 大きい方
Math.max(2, 5); // 5
// 小さい方
Math.min(2, 5); //2
// 絶対値
Math.abs(-3); //3

// 切り上げ
Math.ceil(1.5); // 2.0
// 切り捨て
Math.floor(1.5); // 1.0
// 四捨五入
Math.round(1.5); // 2.0

// 累乗
Math.pow(2, 10); // 1024
// 平方根
Math.sqrt(2); // 1.414...
// 常用対数
Math.log10(1000); // 3

// 円周率
Math.PI // Π
// 自然対数の底
Math.E // e
```

## 制御構文
```Java
// if
if (i > 0) {

} else if (i < 0) {

} else {

}

// for / for-each
for (int i = 0; i < max; i++) {

}

for (var : collection) {

}

// while / do-while
while(i > 0) {

}

do {

} while(i > 0);

// switch
switch (i) {
  case 0:
    break;
  case 1:
    break;
  default:

}
```

## 配列
```Java
// 一次元配列
// 初期化
int[] num = new int[10];
Arrays.fill(num, 0);

// ディープコピー
String[] copySrc = new String[10];
String[] copyDst = new String[10];
copyDst = Arrays.copyOf(copySrc, sopySrc.length);

// 多次元配列
// 初期化
int[][] num = new int[10][10];
for (int i = 0; i < num.length; i++) {
  Arrays.fill(num[i], 0);
}

// ディープコピー
String[][] copySrc = new String[10][10];
String[][] copyDst = new String[10][10];
for (int i = 0; i < copySrc.length; i++) {
  copyDst[i] = Arrays.copyOf(copySrc[i], copySrc[i].length);
}
```

## リスト
```Java
// 初期化
List<String> list = new ArrayList<String>();

// オジェクトによる操作
// 追加
list.add(str);
// 削除
list.remove(str);
// インデックス取得
list.indexOf(str);
// 存在チェック
list.contains(str);

// インデックスによる操作
// i番目を取得
list.get(i);
// i番目を置換
list.set(i, str);
```

## ハッシュマップ
```Java
// 初期化
HashMap<Integer, String> hMap = new HashMap<Integer, String>();

// 追加
hMap.put(i, str);
// 取得
hMap.get(i);
// 存在チェック
hMap.containsKey(i);
```

## 優先度キュー
```Java
PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>();

// 追加
pQueue.offer(i);
// 取得(キューから削除しない)
pQueue.peek(i);
// 取得(キューから削除する)
pQueue.poll(i);
```
