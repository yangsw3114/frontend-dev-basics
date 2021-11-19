/**
* named export I
* 
* 이름 없는 객체를 하나 export하는 경우const
* 
* exports(require.js)와 유사하다. 이 모듈을 import할 때 destructing이 가능하다. 
*/


export const add = function(a, b) {
    return a + b;
};

export const subtract = function(a, b) {
    return a - b;
}