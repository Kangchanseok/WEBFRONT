//한줄 주석
/*
여러 줄 주석
:자바스크립트 주석은 c,자바와 동일
*/

// 내장 객체 console
console.info("정보메시지");
console.debug("디버그 메시지");
console.warn("경고메시지");
console.error("에러 메시지");
console.log("hello");

// 연속으로 데이터를 출력 -> ,로 구분
console.log("String",2021,true);

// 현재 플랫폼 정보 출력
console.log("Process Version", process.version);
console.log("Process Platform", process.platform);

// 객체의 속성 접근: .으로 구분
console.log(Math.PI); // math 객체의 속성인 pi
console.log(Math.max(1,3,2,4,9,5));

console.log("------------");

// var, let, const
var testVar = 10;
let testLet = 20;
const testConst = 30;

console.log(testVar);
console.log(testLet);
console.log(testConst);

testVar = 50;
testLet = 60;
// testConst = 100;

console.log(testVar);
console.log(testLet);
// console.log(testConst); const는 변경 불가~

console.log("--------------");
// 자바스크립트는 동적 타입 언어
// 데이터 타입이 고정되지 않고
// 데이터가 할당 되었을 때, 그 타입이 결정
let v = "This is String";
// 데이터의 타입을 체크해야 한다
console.log(v,"->",typeof v);
// 다른 데이터 타입 할당
v = 2021;
console.log(v,"->", typeof v);

