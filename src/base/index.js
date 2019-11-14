let reg = /\d+/;
let str = 'demo200demo';
reg.test(str); // true

let reg = /^\d+/;
let str = 'demo202';
reg.test(str); // false

let reg = /^\d+$/;
let str = '123dempo13w2';
reg.test(str); // false

let reg = /^2.3$/;
reg.test('2.3'); // true

// 将其转换为普通字符
let reg = /^\\d$/;
reg.test('d'); // false
reg.test('\d');  // false
reg.test('\\d'); // true

let reg = /^\\\d$/; // \\ \d
reg.test("\\0");  // true

let reg = /^18|19$/;
reg.test("1819"); // true
reg.test('181'); // true
 