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
  idCard: /^\d{6}[1-2]{1}[0-9]{3}[0-1]{1}[0-9]{1}[0-3]{1}[0-9]{1}(\d|X|x){4}/,
  phone: /^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/
}
/**
 * 对字符串进行验证，成功返回true，失败返回false
 *
 * @param {string} str 要验证的字符串
 * @param {(RegExp | string)} regExp 模式或者正则表达式
 *    > 1. email: 邮箱  
 *    > 2. idCard: 身份证
 *    > 3. phone ：手机
 * @returns {Boolean} 返回值 成功或失败
 */
function verify(str: string, regExp: RegExp | string): Boolean {
  regExp = typeof regExp === 'string' ? RegTypeMap[regExp] : regExp
  return regExp.test(str)
}

export default verify;