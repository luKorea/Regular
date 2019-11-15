let str = 'my name is lu-korea';
str = str.replace(/-/g, '_');
str = str.replace(/\b(\w)(\w*)\b/g, (...args) => {
    return args[1].toUpperCase() + args[2];
});
str = str.replace(/_/g, "-");
console.log(str);