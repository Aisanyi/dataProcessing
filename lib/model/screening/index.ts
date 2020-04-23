/**
 * 对象接口
 *
 * @interface obj
 */
interface obj {
  [propName: string]: any;
}

/**
 *  过滤数组对象
 *
 * @param {Array<obj>} datas 需要处理的值,只支持数组对象形式
 * @param {(obj | Array<string>)} map 映射
 * @returns {Array<obj>} 处理过后的值
 */
function screening(datas: Array<obj>, map: obj | Array<string>) : Array<obj>{
  let maps: obj = {};
  let returnData: Array<obj> = [];
  Object.prototype.toString.call(map) === "[object Array]" ? map.filter( (v: string) => { maps[v] = v} ) : maps = map
  datas.forEach( v =>{
    let dataObj: obj = {};
    for (const key in maps) {
      if (v.hasOwnProperty(key)) {
        dataObj[key] = v[maps[key]]
      }
    }
    returnData.push(dataObj)
  })

  return returnData
}

export default screening;