'use strict';
const { getTime } = require('../dist');


test('传入为string', () => {
  const result = getTime('2020.3.1 2:20:33');
  let date = new Date('2020.3.1 2:20:33')
  expect(result).toEqual({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    date: date.getTime(),
    dateDay: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`,
  });
});
test('传入为string，2020-3-1', () => {
  const result = getTime('2020-3-1 2:20:33');
  let date = new Date('2020.3.1 2:20:33')
  expect(result).toEqual({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    date: date.getTime(),
    dateDay: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`,
  });
});
test('传入为string,2020年3月1日', () => {
  const result = getTime('2020年3月1日 2:20:33');
  let date = new Date('2020.3.1 2:20:33')
  expect(result).toEqual({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    date: date.getTime(),
    dateDay: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`,
  });
});
test('传入为number,时间戳', () => {
  let date = new Date('2020.3.1 2:20:33')
  const result = getTime(date.getTime());
  expect(result).toEqual({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    date: date.getTime(),
    dateDay: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`,
  });
});
test('不传值', () => {
  const result = getTime();
  let date = new Date()
  expect(result).toEqual({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
    date: result.date,
    dateDay: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`,
  });
});
test('传值为空字符串', () => {
  const result = getTime('');
  let date = new Date()
  expect(result).toEqual({
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: 0,
    minute: 0,
    second: 0,
    date: new Date(`${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`).getTime(),
    dateDay: `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`,
  });
});

