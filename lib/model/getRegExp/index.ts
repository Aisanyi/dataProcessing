/**
 *
 * @interface RegType 正则对象接口
 */
interface RegType {
  [propName: string]: RegExp;
}

// 模式与正则的映射
const RegTypeMap:RegType  = {
  getChinese: /[^\u4e00-\u9fa5]/g,
  getUChinese: /[\u4e00-\u9fa5]/g,
  getNumber: /[\D]/g,
  getUNumber: /[\d]/g
}

/**
 *  通过正则过滤字符串，并且返回过滤之后的字符串
 *
 * @param {string} str 需要处理的字符串
 * @param {RegExp} regExp 正则：需要过滤字符的正则，或者匹配的模式 
 *    > 1. getChinese: 将非中文过滤掉  
 *    > 2. getUChinese: 将中文过滤掉
 *    > 3. getNumber ：将非数字过滤
 *    > 4. getUNumber ：将数字过滤
 * @returns {string} 处理过后的字符串
 */
function getRegExp(str: string, regExp: RegExp | string): string {
  regExp = typeof regExp === 'string' ? RegTypeMap[regExp] : regExp
  str = str.replace(regExp, '');
  return str;
}

export default getRegExp;