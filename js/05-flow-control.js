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

