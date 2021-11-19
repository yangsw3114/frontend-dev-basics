// 1.
// unnamed export 모듈에서 대상을 하나 import 할 때는 이름을 지정해야 한다.

import myFunction from './ex08.01.mjs';
import myObject from './ex08.02.mjs';


console.log(myFunction(10, 20));
console.log(myObject.add(10, 20));


// 2.
// named export는 import 대상이 다수가 될 수 있기 때문에 하나의 특정 이름으로 받을 수 없다.
// 대신 * as ~ 를 사용한다.
//
// import m from './ex08.03.mjs'
import * as m from './ex08.03.mjs'

console.log(m.add(10, 20));
console.log(m.subtract(10, 20));

// 3.
import {subtract} from './ex08.04.mjs';
console.log(subtract(20, 10));


// 4.
import math, {add} from './ex08.05.mjs';
console.log(math.subtract(20, 10), add(10, 20));
