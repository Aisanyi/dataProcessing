/**
 *
 * @interface RegType 正则对象接口
 */
interface RegType {
  [propName: string]: RegExp;
}

// 模式与正则的映射
const RegTypeMap:RegType  = {
  email: /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/,
  idCard: /^\d{6}[1-2]{1}[0-9]{3}[0-1]{1}[0-9]{1}[0-3]{1}[0-9]{1}(\d|X|x){4}/
}

function verify(str: string, regExp: RegExp | string): Boolean {
  regExp = typeof regExp === 'string' ? RegTypeMap[regExp] : regExp
  return regExp.test(str)
}

export default verify;