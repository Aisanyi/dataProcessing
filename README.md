# data-processing[![Build Status](https://travis-ci.org/Aisanyi/dataProcessing.svg?branch=master)](https://travis-ci.org/Aisanyi/dataProcessing)

> 这是一个对数据做处理的项目

## 功能

### getTime

> 描述： 对输入的时间字符串或者时间戳处理，返回一个经过处理的时间对象

#### 参数

| 参数    | 描述                 | 类型           | 默认值   |
| ------- | -------------------- | -------------- | -------- |
| dateStr | 时间字符串或者时间戳 | string，number | 当前时间 |

#### 返回值

```
{
  year: 2020, // 年
  month: 3, // 月
  day: 1, // 日
  hour: 2, // 时
  minute: 20, // 分
  second: 33, // 秒
  date: 1583000433000, // 时间戳
  dateDay: "2020年3月1日"
}
```

---

### getRegExp

> 描述： 对字符串根据相应的正则进行过滤，内置了几个常用的正则

#### 参数

| 参数   | 描述                       | 类型           | 默认值 |
| ------ | -------------------------- | -------------- | ------ |
| str    | 需要处理的字符串           | string         | 无     |
| regExp | 正则表达式或者自带的模式名 | string，RegExp | 无     |

##### regExp 参数

> 1. getChinese: 将非中文过滤掉
> 2. getUChinese: 将中文过滤掉
> 3. getNumber ：将非数字过滤
> 4. getUNumber ：将数字过滤

#### 返回值

> 过滤之后的字符串

---

### removeChild

> 描述： 递归的删除指定的对象的空属性（属性值为[]、null、''）或者数组中对象的空属性

注意： 该功能只删除指定的并且为空的属性

#### 参数

| 参数       | 描述                   | 类型          | 默认值   |
| ---------- | ---------------------- | ------------- | -------- |
| data       | 需要处理的对象或者数组 | object，array | 无       |
| removeAttr | 需要删除的属性名       | string        | children |

#### 返回值

> 处理之后的数组或者对象

---

### verify

> 描述：对字符串进行正则验证，成功返回 true，失败返回 flase

#### 参数

| 参数   | 描述                       | 类型           | 默认值 |
| ------ | -------------------------- | -------------- | ------ |
| str    | 需要处理的字符串           | string         | 无     |
| regExp | 正则表达式或者自带的模式名 | string，RegExp | 无     |

##### regExp 参数

> 1. email: 邮箱
> 2. idCard: 身份证
> 3. phone ：手机

#### 返回值

> 成功返回 true，失败返回 flase

---

### screening

> 描述： 对数组对象的数据进行过滤

```
数组对象： [{},{}]
```

#### 参数

| 参数  | 描述               | 类型               | 默认值 |
| ----- | ------------------ | ------------------ | ------ |
| datas | 需要处理的数组对象 | Array<obj>         | 无     |
| map   | 映射，需要的属性   | obj，Array<string> | 无     |

##### map 说明

如果为对象：

```
{
  name: oldName // key: 表示过滤后你要的属性名 value： 表示原来的属性名
}
```

如果为数组： 数组中包含需要的属性

#### 返回值

> 过滤之后的数组对象

---

### copyText

> 描述： 将提供的字符串加到剪贴板（支持移动端）

#### 参数

| 参数     | 描述             | 类型           | 默认值 |
| -------- | ---------------- | -------------- | ------ |
| text     | 需要复制的内容   | number，string | 无     |
| callBack | 成功后的回调参数 | Function       | 无     |

#### 返回值

> true

### downFile

> 描述： 提供前端接受文件流下载功能

#### 参数

| 参数     | 描述             | 类型       | 默认值    |
| -------- | ---------------- | ---------- | --------- |
| data     | 文件流           | Array<any> | 无        |
| fileName | 文件名（带后缀） | String     | 无 String |

#### 返回值

> 无

### printing

> 描述：根据提供的html片段调用浏览器的打印功能

#### 参数

| 参数     | 描述             | 类型       | 默认值    |
| -------- | ---------------- | ---------- | --------- |
| html     | html片段           | string | 无        |

#### 返回值

> true | false

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

screening(data, ["name"])

copyText(string, callback)
```
