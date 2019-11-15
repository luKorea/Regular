// let date = '2019-11-15 2:03:17';
// let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})\s+(\d{1,2}):(\d{1,2}):(\d{1,2})$/g;
// date = date.replace(reg, (...args) => {
//     return `${args[1]}年${args[2]}月${args[3]}日 ${args[4]}时${args[5]}分${args[6]}秒`;
// });

// date = date.replace(reg, '$1年$2月$3日 $4时$5分$6秒')

// console.log(date);

// let date1 = new Date().toLocaleString(),
// reg1 = /\d+/g,
// args = date1.match(reg1),
// template = '{0}年{1}月{2}日 {3}时{4}分{5}秒';
// template = template.replace(/\{(\d+)\}/g, (...arg) => {
//     let index = arg[1],
//     value = args[index];
//     return value;
// });
// console.log(template);


String.prototype.formatDate = function formatDate () {
    let array = this.match(/\d+/g),
    template = arguments[0] ||  '{0}年{1}月{2}日 {3}时{4}分{5}秒';
    template = template.replace(/\{(\d+)\}/g, (...args) => {
        let value = array[args[1]] || '0';
        value.length < 2 ? value = '0' + value : null;
        return value;
    });
    return template;
}


let str = new Date().toLocaleString();
str = str.formatDate();

console.log(str);
