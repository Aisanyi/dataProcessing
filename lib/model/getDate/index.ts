interface DateObject {
  year: number,
  month: number,
  day: number,
  date: number,
  dateDay: string
}

function getDate(date:any): DateObject {
  date = date.replace(/-/g, '/')
  let newDate = new Date(date);
  let returnData = <DateObject>{};
  returnData.year = newDate.getFullYear();
  returnData.month = newDate.getMonth() + 1;
  returnData.day = newDate.getFullYear();
  returnData.date = newDate.getTime();
  returnData.dateDay = `${returnData.year}年${returnData.month}月${returnData.day}日`

  return returnData
}

export default getDate;
