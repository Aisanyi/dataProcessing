/**
 * 即将导出的日期对象的接口
 * 
 * @interface DateObject
 */
interface DateObject {
  year: number,
  month: number,
  day: number,
  date: number,
  dateDay: string
}

/**
 *  处理时间
 *
 * @param {string} 日期字符串
 * @returns {string}
 */
function timeClear(date:string) :string {
  return date.replace(/-|年|月|日/g, '/');
}

/**
 * 获取处理的时间
 *
 * @param {(string | number)} 时间戳或者日期字符串
 * @returns {DateObject} 处理的日期的对象
 */
function getTime(date:string | number = new Date().getTime()): DateObject {
  typeof date === 'string' ? date = timeClear(date) : false
  let newDate = new Date(date);
  let returnData = <DateObject>{};
  returnData.year = newDate.getFullYear();
  returnData.month = newDate.getMonth() + 1;
  returnData.day = newDate.getDate();
  returnData.date = newDate.getTime();
  returnData.dateDay = `${returnData.year}年${returnData.month}月${returnData.day}日`

  return returnData
}

export default getTime;
