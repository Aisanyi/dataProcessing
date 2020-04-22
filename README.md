# data-processing[![Build Status](https://travis-ci.org/Aisanyi/dataProcessing.svg?branch=master)](https://travis-ci.org/Aisanyi/dataProcessing)
> 这是一个对数据做处理的项目

## 功能
> 1. getTime() :对输入的时间字符串或者时间戳处理，返回一个经过处理的时间对象
> 2. getRegExp() : 对字符串进行处理 
> 3. removeChild() : 递归的删除对象的空属性（属性值为[]、null、''）或者数组中对象的空属性
> 4. verify() : 对字符串进行验证，成功返回true，失败返回false
> 5. screening(): [{name:'aaa'},{name:'aaas', age:'18'}] ===screening(data, ["name"])====> [{name:'aaa'},{name:'aaas'}]
> 6. copyText(): 将提供的字符串加到剪贴板（支持部分移动端）
## 下载及使用
#### 下载
```
npm i data-processing | cnpm i data-processing
```
#### 使用
```
import { getTime, getRegExp, removeChild, verify, screening, copyText } from 'data-processing/dist'

getTime(dateStr)
getRegExp(str, RegExp | string)
removeChild({} | [], attrName:string) 
verify('aisanyili@qq.com', 'email')
screening(data, ["name"]) // data ==> [{}]
copyText(string, callback)
```

