# data-processing[![Build Status](https://travis-ci.org/Aisanyi/dataProcessing.svg?branch=master)](https://travis-ci.org/Aisanyi/dataProcessing)
> 这是一个对数据做处理的项目，目前只有对时间的处理

## 功能
> 1. getTime() :对输入的时间string | number 处理
> 2. getRegExp : 对字符串进行处理
## 下载及使用
#### 下载
```
npm i data-processing
```
#### 使用
```
import { getTime, getRegExp } from 'data-processing/dist'

getTime(dateStr)
getRegExp(str, RegExp | string)
```

