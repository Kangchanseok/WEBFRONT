function logic1(){
    console.log("begin logic1");
    setTimeout(()=>{
        console.log("callback1 called");
        console.log("begin logic2");
        setTimeout(() =>{
            console.log("callback2 called");
        },2000);
        console.log("end logic2");
    },2000); // 2초 후에 콜백 함수 수행
    
        console.log("end logic1");
    }
    // logic1();

    function logicPromise(){
        console.log("begin logicPromise");

        // 비동기 처리를 위한 Promise 객체 생성
        return new Promise((resolve, reject) =>{
            // resolve: 성공했을 때 값을 전달
            // reject: 실패했을 때 사유를 전달
            setTimeout(() => {
                resolve("Success");
                // 비동기 처리에 성공하면 resolve 함수를 실행한다
            },2000);
            console.log("end logicPromise");
            });
    
    }
    function testLogicPromise(){
        console.log("Test logic Promise");
        logicPromise()
        .then(value => {
            // 성공했을 때
            console.log("PROMISE SUCCESS: ",value);
        })
        .catch(reason =>{
            // 실패했을 때
            console.error("PROMISE FAILED: ", reason);
        })
    }
    // testLogicPromise(); 

    // async/await는 Promise를 좀 더 쉽게 다룰 수 있도록 해줌
    async function asyncFunc(){
        console.log("async function");
        return "SUCCESS";
    }
// async 함수는 항상 Promise를 리턴한다
asyncFunc()
.then(value => {
    console.log(value);
});

