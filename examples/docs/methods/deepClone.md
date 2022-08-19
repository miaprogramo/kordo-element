## \$DeepClone 深拷贝

此方法大致基于[结构化克隆算法](https://mdn.io/Structured_clone_algorithm)，并支持克隆数组、数组缓冲区、布尔值、日期对象、映射、数字、`Object` 对象、正则表达式、集合、字符串、符号和类型化数组。对象自身的可枚举属性 `arguments` 被克隆为普通对象。对于无法克隆的值（例如错误对象、函数、DOM 节点和 WeakMaps）返回一个空对象。

### 用法

传入需要克隆的值，返回深度克隆的值。

```javascript
var obj = [{ a: 1 }, { b: 2 }];

var cloneObj = this.$DeepClone(obj);
```
