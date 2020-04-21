# data-processing[![Build Status](https://travis-ci.org/Aisanyi/dataProcessing.svg?branch=master)](https://travis-ci.org/Aisanyi/dataProcessing)
> 这是一个对数据做处理的项目

## 功能
> 1. getTime() :对输入的时间string | number 处理
> 2. getRegExp() : 对字符串进行处理
> 3. removeChild() : 递归的删除对象的空属性（属性值为[]、null、''）或者数组中对象的空属性
## 下载及使用
#### 下载
```
npm i data-processing | cnpm i data-processing
```
#### 使用
```
import { getTime, getRegExp, removeChild } from 'data-processing/dist'

getTime(dateStr)
getRegExp(str, RegExp | string)
removeChild({} | [], attrName:string) 
```

