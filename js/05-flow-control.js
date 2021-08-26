// 연습문제 1
// 2단부터 9단까지
// (for문, while문)

for (let i=2; i<=9;i++){
    console.log(i + "단");
    for(let j=1; j<=9; j++){
    console.log(i + "*" + j + "=" + (i*j));
    }
}



// 연습문제 2
// *****
// ****
// ***
// **
// *
// (for문, while문)
let star = "";
for(let i=0; i<5; i++){
    for(let j=5; j>i; j--){
        star += "*";
    }
    star += "\n";
}
console.log(star);

// es6: for ... in
// 객체의 속성(property)를 순회

let obj = {
    name: "강찬석",
    age: 27,
    job: "백수",
    gender: "남성"

}

for (let key in obj){
    console.log(key);

}
const arr = [5,1,4,3,2,9,8,0];
for(let key in arr){
    console.log(key);
}
// es6: for...of
// 반복 가능 객체에서 요소를 하나씩
for (let value of arr){
    console.log(value);
}
// for...of는 순회 객체(배열 등) 에서만 사용

// for(let value of obj){
//     console.log(value);
// }

// 주의: for...in과 for...of를 구분해서 사용