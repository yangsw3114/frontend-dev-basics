/**
 * Arrow Function
 */

const power = function(x){
    return x* x;
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){
    process.stdout.write(`${n}:${power(n)}\t`);
});

//ex1  //디버그 콘솔말고 터미널에서 해야 실행됨
console.log("\n---ex1----------------------------------\n");
const pow = x=>x*x;
numbers.forEach(function(n){
    // 방법1
    // let result = (function(x){
    //     return x* x;
    // })(n);

    //방법2
    // let result = (x =>{
    //     return x* x;
    // })(n);

    //방법3
    //let result = (x => x* x)(n);
    let result = (pow)(n);

    process.stdout.write(`${n}:${power(n)}\t`);
});

//ex2
console.log("\n--------------\n");
numbers.forEach(n => process.stdout.write(`${n}:${(x=>x* x)(n)}\t`));

//ex3 - 여러 행 함수
console.log("\n--------------\n");
[5, 3, 15, 1045, 43, 92].forEach(e => {
    if(e % 5 == 0){
        process.stdout.write(`${e}\t`);
    }
});

//ex4 - this를 어휘적 바인딩(Lexical Bind)
console.log("\n--------------\n");
const dooly = {
    name: '둘리',
    friends: ['또치', '마이콜', '도우너','길동'],
    printFriends: function(){
        // this.friends.forEach(function(f){
        //     console.log(`${this.name}의 친구 ${f}`);
        // }.bind(this));

        this.friends.forEach(f=>console.log(`${this.name}의 친구 ${f}`));
        //Arrow 함수의 장점
    }
}


dooly.printFriends();