RegExp.prototype.execAll = function execAll() {
    let str = arguments[0] || '',
    result = [],
    ary = this.exec(str);
    if(!this.global) {
        return this.exec(str);
    }
    while (ary) {
        result.push(ary[0]);
        ary = this.exec(str);
    }
    return result;
}

let reg = /\d+/;
let str = 'korea2019demo2020';
console.log(reg.execAll(str));


