## Vue3 工具函数 shared （@vue/shared）
### 1. babelParserDefaultPlugins babel 解析默认插件
```
const babelParserDefaultPlugins = [
  "bigInt",
  "optionalChaining",
  "nullishCoalescingOperator",
];
```
这里是几个默认插件

### 2. EMPTY_OBJ 空对象
```
const EMPTY_OBJ =
  process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
// Object.freeze() 作用是 冻结对象,不可增改删(包括原型),可查.
// 冻结的对象最外层无法修改。
// 例子:
const EMPTY_OBJ_1 = Object.freeze({});
EMPTY_OBJ_1.name = "工具函数";
console.log(EMPTY_OBJ_1.name); // undefined

const EMPTY_OBJ_2 = Object.freeze({ info: { name: "工具函数" } });
EMPTY_OBJ_2.info.nick = "函数";
EMPTY_OBJ_2.obj = "props2";
console.log(EMPTY_OBJ_2.info.name); // '工具函数'
console.log(EMPTY_OBJ_2.obj); // undefined
console.log(EMPTY_OBJ_2);

/**
 * {
 *  info: { name: "工具函数", nick: "函数" }
 * }
 */
```
process.env.NODE_ENV 是 node 项目中的一个环境变量，一般定义为：development 和production。根据环境写代码。比如开发环境，有报错等信息，生产环境则不需要这些报错警告。

### 3. EMPTY_ARR 空数组
```
const EMPTY_ARR =
  process.env.NODE_ENV !== "production" ? Object.freeze([]) : [];

// 例子：
EMPTY_ARR.push(1); // 报错，也就是生产环境冻结数组
EMPTY_ARR.length = 3;
console.log(EMPTY_ARR.length); // 0
```

### 4. NOOP 空函数
```
// 使用场景：1. 方便判断， 2. 方便压缩

const NOOP = () => {};

// 1. 条件判断
const dev = true;
if (dev) {
  instance.render = function () {
    console.log("render");
  };
}

// 可以用作判断。
if (instance.render === NOOP) {
  console.log("i");
}

// 2. 方便压缩 如果是 function(){} ，不方便压缩代码
```

### 5. NO 永远返回 false 的函数
```
/**
 * Always return false.
 */
const NO = () => false;

// 有压缩代码的优势
```

### 6. isOn 判断是 on 开头,并且 on 后首字母不是小写字母
```
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);

// 例子:
isOn("onChange"); // true
isOn("onchange"); // false
isOn("on1"); // true
```
onRE是正则, ^on是指 on 开头, ^a-z是指不是 a-z 小写字母

### 7. isModelListener 监听器
```
const isModelListener = (key) => key.startsWith("onUpdate:");

// 例子：
isModelListener("onUpdate:change"); // true
isModelListener("1onUpdate:change"); // false
```
判断字符串是不是onUpdate:开头
startsWith() 方法用于检测字符串是否以指定的前缀开始。

### 8. extend 合并
```
const extend = Object.assign;

// 例子：
const data = { name: "工具", age: 30 };
const data2 = extend(data, { mp: "前端小溪", name: "工具函数" });
console.log(data); // { name: "工具函数", mp: "前端小溪", age: 30 }
console.log(data2); // { name: "工具函数", mp: "前端小溪", age: 30 }
console.log(data === data2); // true
```
将两个对象合并,如相同属性,后者覆盖前者,且存在继承关系

### 9. remove 删除数组某一项
```
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};

// 例子：
const arr = ["a", 2, "c"];
remove(arr, "c");
console.log(arr); // ['a', 2]
```

### 10. hasOwn 是不是自己本身所拥有的属性
```
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);

// 原型操作相关 API
// Object.getPrototypeOf
// Object.setPrototypeOf
// Object.isPrototypeOf

// .call 用来重定义 this 这个对象的
// .call 例子:
// 猫吃鱼，狗吃肉，
// 有天狗想吃鱼了
// 猫.吃鱼.call(狗，鱼)
// 狗就吃到鱼了

// 例子:
hasOwn({ name: "凝雨" }, "name"); // true
hasOwn({ name: "凝雨" }, "a"); // false
hasOwn({ name: "凝雨" }, "toString"); // false
hasOwn({ __proto__: { name: "凝雨" } }, "name"); // false
```
hasOwn 可判断是否自身的属性,不包含原型上的方法

### 11. isArray 判断是不是数组
```
const isArray = Array.isArray;

// 例子：
isArray([1, 2, 3, 4]); // true
var obj = {
  a: 1,
  b: 2,
};
isArray(obj); // false
isArray(new Array()); // true
isArray("Array"); // false

const fakeArr = { __proto__: Array.prototype, length: 0 };
isArray(fakeArr); // false
fakeArr instanceof Array; // true
// 所以 instanceof 这种情况 不准确
```

### 12. isMap 判断是不是 Map 对象
```
const isMap = (val) => toTypeString(val) === "[object Map]";

// 例子:
const map = new Map();
const o = { p: "Hello World" };
map.set(o, "content");
map.get(o); // 'content'
isMap(map); // true
```

### 13. isSet 判断是不是 Set 对象
```
const isSet = (val) => toTypeString(val) === "[object Set]";

// 例子：
const set = new Set();
isSet(set); // true
```
Set 对象较多在数组去重时用到

### 14. isDate 判断是不是 Date 对象
```
const isDate = (val) => val instanceof Date;

// 例子：
isDate(new Date()); // true

//  `instanceof`会根据原型链往上查找
isDate({ __proto__: new Date() })(
  // true
  { __proto__: [] }
) instanceof Array; // true
// 判断数组时应使用Array.isArray
```

### 15. isFunction 判断是不是函数
```
const isFunction = (val) => typeof val === "function";

// 例子：
isFunction(() => {}); // true
```

### 16. isString 判断是不是字符串
```
const isString = (val) => typeof val === "string";

// 例子
isString(12); // false
isString(""); // true
isString("12"); // true
```

### 17. isSymbol 判断是不是 Symbol
```
const isSymbol = (val) => typeof val === "symbol";

// 例子：
let s = Symbol();

typeof s; // "symbol"
```
Symbol 表示独一无二的值

### 18. isObject 判断是不是对象
```
const isObject = (val) => val !== null && typeof val === "object";

// 例子:
isObject({}); // true
isObject(null); // false
// 判断不为 null 的原因是 typeof null 其实 是 object
```

### 19. isPromise 判断是不是 Promise
```
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

// 例子
const p1 = new Promise(function (resolve, reject) {
  resolve("凝雨");
});
isPromise(p1); // true
```
判断参数是否是对象,并且存在 .then 函数和 .catch 函数

### 20. objectToString 对象转字符串
```
const objectToString = Object.prototype.toString;
```

### 21. toTypeString 对象转字符串
```
const toTypeString = (value) => objectToString.call(value);

// 例子:
toTypeString({ name: "凝雨" }); // "[object Object]"
```

### 22. toRawType 对象转字符串 截取后几位
```
const toRawType = (value) => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

// 例子:
toRawType({ name: "凝雨" }); // "Object"
```

### 23. isPlainObject 判断是不是纯粹的对象
```
const isPlainObject = (val) => toTypeString(val) === "[object Object]";

isPlainObject({}); // true
isPlainObject([]); // false

const Person = function () {
  this.name = "凝雨";
};
isPlainObject(new Person()); // true 构造函数是实例对象
```

### 24. isIntegerKey 判断是不是数字型的字符串 Key
```
const isIntegerKey = (key) =>
  isString(key) &&
  key !== "NaN" &&
  key[0] !== "-" &&
  "" + parseInt(key, 10) === key;

// 其中 parseInt 第二个参数是进制。
// 例子:
isIntegerKey(""); // false
isIntegerKey("12"); // true
isIntegerKey("012"); // false
isIntegerKey("a"); // false
```
判断字符串类型,并且不是 NaN ,并且不是’-'开头,并且可以被 parseInt

### 25. makeMap && 判断是不是纯粹的对象
makeMap 是将一个带逗号分隔的字符串,生成一个 map(键值对)对象,并返回一个可供检测key值是否存在的函数,第二个参数是否将参数转小写
```
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? (val) => !!map[val.toLowerCase()]
    : (val) => !!map[val];
}

const isReservedProp = /*#__PURE__*/ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref," +
    "onVnodeBeforeMount,onVnodeMounted," +
    "onVnodeBeforeUpdate,onVnodeUpdated," +
    "onVnodeBeforeUnmount,onVnodeUnmounted"
);

// 例子:
isReservedProp("key"); // true
isReservedProp("ref"); // true
isReservedProp("onVnodeBeforeMount"); // true
isReservedProp("onVnodeMounted"); // true
isReservedProp("onVnodeBeforeUpdate"); // true
isReservedProp("onVnodeUpdated"); // true
isReservedProp("onVnodeBeforeUnmount"); // true
isReservedProp("onVnodeUnmounted"); // true
```

### 26. cacheStringFunction 缓存
```
const cacheStringFunction = (fn) => {
  const cache = Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

let add = (a, b) => a + b;
let calculate = cacheStringFunction(add);
calculate(10, 20); //30
calculate(10, 20); // 相同的参数,第二次调用时,从缓存中取出数据,而非重新计算一次

var count = 0;
var fn = function (n) {
  count++;
  return n < 2 ? n : fn(n - 1) + fn(n - 2);
};
fn = cacheStringFunction(fn);
for (var i = 0; i <= 10; i++) {
  fn(i);
}
console.log(count); // 12
// 不使用缓存函数count 是 453
```
缓存函数是指将上次的计算结果缓存起来,当下次调用时,如果遇到相同的参数,就直接返回缓存中的数据

### 27. camelize 连字符转小驼峰
```
// \w 是 0-9a-zA-Z_ 数字 大小写字母和下划线组成
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
});

camelize("on-click"); // onClick
```

### 28. hyphenate 小驼峰转连字符
```
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) =>
  str.replace(hyphenateRE$1, "-$1").toLowerCase()
);

// 例子:
hyphenate("onClick"); // on-click
```

### 29. capitalize 字符串转 on 后首字母大写
```
// 首字母转大写
const capitalize = cacheStringFunction(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) =>
  str ? `on${capitalize(str)}` : ``
);

// 例子:
toHandlerKey("click"); // onClick
```

### 30. hasChanged 判断是不是有变化
```
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);

// Object.is ES6新增的用来比较两个值是否严格相等的方法
// 例子:
hasChanged(1, 2); // true 已经更改
```

### 31. invokeArrayFns 执行数组里的函数
```
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

// 例子:
let arr = [
  function (val) {
    console.log(`我是${val}`);
  },
  function (val) {
    console.log(`今年6岁了`);
  },
];
invokeArrayFns(arr, "凝雨");
/**
 * 我是凝雨
 * 今年6岁了
 */
```

### 32. def 定义对象属性
```
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value,
  });
};

// configurable: 该属性是否可被删除
// enumerable: 该属性在for in循环中是否会被枚举。
// value: 获取属性时所返回的值。
```

### 33. toNumber 转数字
如果是 parseFloat 返回 NaN 则返回本身, NaN 返回 true, 否则返回
```
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};

// 例子:
toNumber("12"); // 12
toNumber("a12"); // 'a12'
parseFloat("a12"); // NaN
isNaN(NaN); // true
```

### 34. getGlobalThis 全局对象
```
let _globalThis;
const getGlobalThis = () => {
  return (
    _globalThis ||
    (_globalThis =
      typeof globalThis !== "undefined"
        ? globalThis
        : typeof self !== "undefined"
        ? self
        : typeof window !== "undefined"
        ? window
        : typeof global !== "undefined"
        ? global
        : {})
  );
};
```

### 35. looseEqual 判断两对象是否相等
源码
```
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
export function looseEqual (a: any, b: any): boolean {
  if (a === b) return true   //参数a恒等于参数b，则直接返回true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) { //如果a,b不为空且都是对象
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        //当a,b是数组时，先判断length长度是否相同，不相同则可以结束比较
        return a.length === b.length && a.every((e, i) => {
          return looseEqual(e, b[i])  //递归判断两个数组中的每一项
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
```
算法描述：
a. 假定对象 a 和 b
b. 遍历 a 中的成员, 判断是否每一个 a 中的成员都在 b 中. 并且 与 b 中的对应成员相等.
c. 再遍历 b 中的成员, 判断是否每一个 b 中的成员都在 a 中. 并且 与 a 中的对应成员相等.
d. 如果成员是引用类型, 递归.
