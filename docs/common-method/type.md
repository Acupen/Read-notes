## 类型判断


```js
function typeOf(param) {
        return Object.prototype.toString.call(param).toLowerCase().slice(8,-1)
      }
```