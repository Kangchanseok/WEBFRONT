// 배열 생성: array 객체로 생성
const v1 = new Array(10); // 10개짜리 빈 배열
const v2 = new Array(); 
const v3 = new Array(2021, "String", true); // 어떤 객체든 들어감

console.log("v1: " , v1, v1.length);
console.log("v2: " , v2, v2.length);
console.log("v3: " , v3, v3.length);

// 리터럴로 생성(추천 방법!!!)
const v4 = []; // 빈 배열
const v5 = [2021, "String", true];

console.log("v4: " , v4, typeof v5);
console.log("v5: " , v5, typeof v5);

// 배열 타입 확인: Array.isArray() 메서드 활용
console.log("v4가 array인가? " , Array.isArray(v4));
console.log("v5가 array인가? " , Array.isArray(v5));

// 기본 값으로 채우기: fill 메서드
const v6 = new Array(10).fill(1); // 10개짜리 1로 채워진 배열
console.log ("v6: " , v6);
v6.fill("default");
console.log ("v6: " , v6);

// C, Java의 배열보다 다양한 용도로 활용
const person = {
    name : "강찬석",
    age : 27
}
// 객체의 속성 -> 배열처럼 접근 가능
console.log(person.name, person["name"]);
console.log(person.age, person["age"]);
// 인덱스를 엄격히 체크하지 않음
const arr =[]; // 빈 배열
console.log(arr, arr.length);
// 인덱스 범위 벗어난 접근
arr[10] = 2021;
console.log(arr, arr.length);

console.log("---------배열의 메서드");
const veges = ["배추", "무", "쪽파"];
const sources = ["소금", "고춧가루", "새우젓"];

console.log(veges, sources);

// 배열 합치기 concat
const items = veges.concat(sources);
console.log(items);

console.log("김장재료: " + items.join(","));
