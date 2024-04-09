## 快速排序

### 普通快排
```js
function quickFn(list) {
        if (list.length <= 1) {
          return list;
        }
        const left = [];
        const right = [];
        const cont = list[0];
        for (let i = 1; i < list.length; i++) {
          if (list[i] > cont) {
            right.push(list[i]);
          } else {
            left.push(list[i]);
          }
        }
        return quickFn(left).concat([cont], quickFn(right));
      }
```
### 区间快排
```js
function quickFn(list) {
        (function inFn(arr, l, r) {
          let i = l;
          let j = r;
          const curCont = arr[i];
          if (i < j) {
            while (i < j) {
              while (i < j && arr[j] > curCont) {
                j--;
              }
              if (i < j) {
                arr[i++] = arr[j];
              }
              while (i < j && arr[i] < curCont) {
                i++;
              }
              if (i < j) {
                arr[j--] = arr[i];
              }
            }
            arr[i] = curCont;
            inFn(arr, l, i - 1);
            inFn(arr, i + 1, r);
          }
        })(list, 0, list.length);
        return list;
      }
```
