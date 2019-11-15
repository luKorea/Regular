let parseURL = (url) => {
    let obj = {};
    url.replace(/([^&?=#]+)=([^&?=#]+)/g, (...args) => {
        obj[args[1]] = args[2];
    });
    url.replace(/#([^&?=]+)/g, (...args) => {
        obj['hash'] = args[1];
    });
    return obj;
}

console.log(parseURL('http://www.baidu/com?name=korea&age=20#student'));