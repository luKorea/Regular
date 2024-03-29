# Regular 正则

1. ###### 什么是正则

   > 正则是一个规则，用来处理**<u>字符串</u>**的规则

2. ###### 正则匹配

   > 编写一个规则，验证某个字符串是否符合这个规则，正则匹配使用的是 **test** 方法

3. ###### 正则捕获

   > 编写一个规则，在一个字符串中吧符合规则的内容捕获取到,正则捕获使用的方法: **正则**的 **exec** 方法、**字符串**的 **split** 方法、字符串的 **split** 、**replace** 、**match** 等方法都支持正则

4. ###### 正则的简单语法

   ```javascript
   let reg = /^$/;  // 两个斜杆中间包含一些内容就是正则，两个斜杆之间包含的全部内容就是元字符
   ```

5. 正则的元字符和修饰符

   >任何一个正则都是由元字符和修饰符组成

   `修饰符（img）`

   > 1. **g**   (gloal)             `全局匹配`
   > 2. **i**    (ignoreCase)  `忽略大小写匹配`
   > 3. **m**  (multiline)      `多行匹配 `

   `元字符`

   - 量词元字符

     > 1. **+**             让前面的元字符出现 `一到多次`
     > 2. **?**             让前面的元字符出现 `一次`
     > 3. *****             让前面的元字符出现 `零到一次`
     > 4. **{ n }**        让前面的元字符出现 `n次`
     > 5. **{ n,  }**      让前面的元字符出现 `n到多次`
     > 6. **{ n, m }**  让前面的元字符出现 `n到m次 `

   - 特殊意义的元字符

     > 1. \               转义字符, 把一个有意义的字符转换为普通字符, 或者将一个普通字符转换为特殊字符
     > 2. **.**               除了 `\n` 以外的任意字符
     > 3. **\d**            匹配一个 `0-9` 之间的数字
     > 4. **\D**            匹配任意一个`非 0-9` 之间的数字
     > 5. **\w**           匹配一个 `0-9或者字母或者_` 之间的字符
     > 6. **\s**            匹配一个任意 `空白` 字符
     > 7. **\b**           匹配一个 `边界` 符 
     > 8. **x | y**       匹配 `x 或者 y` 中的一个
     > 9. **[ a-z ]**     匹配 `a-z` 中的任意一个
     > 10. **[ ^ a-z ]**  匹配任意一个 `非 a-z `的字符
     > 11. **[xyz]**      匹配 `xyz` 中的一个字符
     > 12. **[^xyz]**    匹配 任意一个 `非xyz ` 中的字符
     > 13. **()**            正则的小分组，匹配 一个小分组
     > 14. **^**            以某 `一个元字符开始`
     > 15. **$**            以某 `一个元字符结束`
     > 16. **?:**           只匹配不捕获
     > 17. **?=**          正向预查
     > 18. **?!**           反向预查

   - 除了以上的特殊元字符和量词元字符，其余的都叫普通元字符: 代表本身意义的元字符 (abc...)

6. ###### 元字符代码详解

   `\d`

   ```javascript
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
   ```

   `x|y`

   ```js
   let reg = /^18|19$/;
   reg.test("1819"); // true
   reg.test('181'); // true
   ```

   `() 的作用`

   > 1. 可以改变一个默认的优先级
   >
   > 2. 分组引用
   >
   >    \1 或者 \2 出现的和第n个分组一模一样的内容
   >
   >    ```js
   >    let reg = /^([a-z])([a-z])\2([a-z])$/;
   >    reg.test('food'); // good weel book foot week eggs 
   >    ```
   >
   >    
   >
   > 3. 分组捕获

   `[]`

   > 1. 中括号出现的元字符，一般都代表本身的含义 
   >
   >    ```js
   >    let reg = /^[.?+]+$/;   // .?+ 代表本身 
   >    ```
   >
   > 2. 案例 ：定义一个描述样式类名的规则
   >
   >    ```js
   >    let reg = /^\w[\w-]*$/; 
   >    ```
   >
   > 3. 案例： 判断用户输入的年龄只能在18-69之间
   >
   >    ```js
   >    let reg = /^((18|19)|([2-5]\d)|(6[0-5]))$/;
   >    ```
   >
   > 4. 案例： 身份证
   >
   >    ```js
   >    let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|X)$/;
   >    let str = '445224199811124058';
   >    reg.exec(str);
   >    ```
   >
   >    

7. ###### 验证中文汉字的正则

   > **let reg = /^[\u4E00-\u9FA5]$/**

8. ###### 正则捕获详解

   > 把当前字符串中符合正则的字符捕获到
   >
   > RegExp.prototype `exec` 实现正则的捕获方法

   ```js
   let reg = /\d+/;
   let str = 'korea123';
   reg.exec(str);
   /*
   	当正则匹配的时候:
   		1. 先去验证当前的字符串是否和正则匹配，如果不匹配放回的结果是null
   		2. 如果匹配，从字符串最左边开始，向右查找到匹配的内容，并且把匹配的内容返回
   	exec捕获到结果的格式:
   		获取的结果是一个数组
   		数组中的第一项是当前本次大正则在字符串中匹配到的结果
       执行一次exec只能把符合正则条件中的一项捕获到
   */
   ```

   1. **正则捕获存在懒惰性**

      > 执行一次exec捕获到第一个符合规则的内容，再次执行exec，返回的结果依然是第一次捕获到的结果。

   2. 解决正则捕获的懒惰性

      > 在正则的末尾加修饰符 g (全局匹配)

   3. 正则捕获存在懒惰性原因

      > 1. 正则本身有一个属性: lastIndex (下一次正则在字符串中匹配查找的开始索引)
      > 2. 默认值为0， 从第一个字符查找匹配的内容
      > 3. 默认不管制定多少遍exec方法，正则的lastIndex都不会变
      > 4. 手动修改lastIndex进行修改时，不会起到任何作用

   4. 加修饰符 g解决懒惰性原因

      > 加了修饰符 g 之后。每一次执行完 exec，浏览器默认会把lastIndex的值进行修改，下一次从上一次结束的位置进行查找，所以可以获取到后面匹配的内容

   5. exec局限性

      > 1. 执行一次exec只能捕获到一个正则匹配的结果(即使加了修饰符)，如果需要都捕获到，需要执行n次才能捕获到;
      >
      > 2. 封装execAll方法，执行一次该方法，可以把当前正则匹配到的全部内容都捕获到
      >
      >    ```js
      >    RegExp.prototype.execAll = function execAll() {
      >        let str = arguments[0] || '',
      >        result = [],
      >        ary = this.exec(str);
      >        if(!this.global) {
      >            return this.exec(str);
      >        }
      >        while (ary) {
      >            result.push(ary[0]);
      >            ary = this.exec(str);
      >        }
      >        return result;
      >    }
      >    
      >    let reg = /\d+/;
      >    let str = 'korea2019demo2020';
      >    console.log(reg.execAll(str));
      >    ```

9. ###### 使用字符串方法 **match** 实现捕获

   1. 代码实现

   ```js
   let reg = /\d+/g;
   let str = 'demo210korea220';
   
   console.log(str.match(reg));
   ```

   2. 使用match进行捕获

      > 1. 如果正则加了修饰符 g，执行一次会把所有正则匹配的内容捕获到
      > 2. 如果没有，执行一次match只能捕获把第一次匹配的容捕获到

   3. 局限性

      > 在加了修饰符的情况下，执行match方法只能把大正则匹配的内容捕获到。对于小分组的容方法会给其自忽略

10. ###### 使用 test 实现正则捕获

    >1. 不管是正则的匹配还是正则的捕获，在处理的时候原理是没有区别的: `从字符串的第一个字符向后查找，找到符合正则规则的字符，如果可以找到，说明正则和字符串匹配,(test检测返回true exec捕获返回的内容，如果找到末尾没有匹配的，说明正则和字符串不匹配(test检测返回false， exec 捕获返回null)`
    >2. 如果正则设置了修饰符g，不管你使用test还是exec中的任何方法，都会修改lastIndex的值，下一次查找是基于上一次匹配结果的末尾进行查找

11. 

