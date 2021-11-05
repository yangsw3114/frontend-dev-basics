/*
변수와 데이터 타입
undefined
number
string
boolean
*/

console.log("================원시타입(Primitive Type)=============");
var u = undefined; // var u; 와 동일, 선언과 정의의 구분이 없다.
var i = 10;
var s = "worldhello";
var b =true;

console.log("u:" + typeof(u));
console.log("i:" + typeof(i));
console.log("s:" + typeof(s));
console.log("b:" + typeof(b));

console.log("====[객체1] (object type)=======================");
var i2 = new Number(1);
var b2 = new Boolean(false);
var s2 = new String("hello wolrd");
var o = new Object();
var a = new Array();


var o2 = {};
var a2 = [];

var n = null;

console.log("i2:" + typeof(i2));
console.log("b2:" + typeof(b2));
console.log("s2:" + typeof(s2));
console.log("o:" + typeof(o));
console.log("a:" + typeof(a));

console.log("o2:" + typeof(o2));
console.log("a2:" + typeof(a2));

console.log("n: " + typeof(n));

console.log("====[객체2] (function type)=======================");
var f = new Function("a", "b", "return a+b", "", "");
