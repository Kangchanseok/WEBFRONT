function testForEach(){
    // forEach 메서드: 배열의 요소를 하나씩 콜백에 전달
    let source = ["Banana", "Orange", "Apple", "Mango"];
    console.log("---------forEach");
    source.forEach(item => {
        // 콜백 함수의 인자가 1개: 개별 요소
        console.log(item);

    })
    source.forEach((item,index) =>{
        // 콜백 함수의 인자가 2개: 개별 요소, 배열 내의 인덱스
        console.log(`${index}번째 요소 ${item}`);
    })
    source.forEach((item,index,arr) => {
        // 콜백 함수의 인자가 3개: 개별 요소, 인덱스, 배열 자체
        console.log(`배열 ${arr}의 ${index}번째 요소 ${item}`);
    })
}
// testForEach();

function testSome(){
    let data = [
        {name: "강찬석", age: 27},
        {name: "신중호", age: 27},
        {name: "김나래", age: 32}
    ]
    // some,any: 조건을 만족하는 데이터가 1개 이상 있을 때
    let result = data.some(x =>{
        return x.age <30 ;
    })
    console.log("-------some: age<30 ?", result);

}
// testSome();

function testEvery(){
    let data = [
        {name: "강찬석", age: 27},
        {name: "신중호", age: 27},
        {name: "김나래", age: 32}
    ] // every: 모든 요소가 콜백 함수의 조건을 만족시킬때true
    let result = data.every(x=>{
        return x.age >25;
    })
    console.log("-----every: age > 25?", result);


}
testEvery();