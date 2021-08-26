// 논리형 true or false
// 비교연산/논리연산의 결과
// 논리 조합: AND(논리곱: &&) OR(논리합: ||), NOT(논리부정: !)
let v1; // 선언하되 초기화 되지 않음
let v2 = null; // 선언하고 null로 초기화
console.log(typeof v1, typeof v2);
// undefined: 자바스크립트 엔진에 허용된 데이터
// null: 개발자에게 허용된 타입
// 널 체크
console.log(v1,typeof v1,v1 == null);
console.log(v2,typeof v2,v2 == null);
// 개발자가 임의로 undefined를 할당할 수는 있다.
console.log(v2,typeof v2, v2== undefined); // undefined 체크

// ==: 타입과 관계없이 값 자체를 비교
// ===: 값과 타입 함께 비교
console.log(2021 == "2021");
console.log(2021 === "2021");
