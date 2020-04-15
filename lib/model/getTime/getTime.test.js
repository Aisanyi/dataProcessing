'use strict';
const getTime = require('../../../dist/index').getTime;

describe('ts-hi function test', () => {
  it('传入为string', () => {
    const result = getTime('2020.3.1');
    expect(result).toEqual({
      year: 2020,
      month: 3,
      day: 1,
      date: 1582992000000,
      dateDay: "2020年3月1日",
    });
  });
  it('传入为string，2020-3-1', () => {
    const result = getTime('2020-3-1');
    expect(result).toEqual({
      year: 2020,
      month: 3,
      day: 1,
      date: 1582992000000,
      dateDay: "2020年3月1日",
    });
  });
  it('传入为string,2020年3月1日', () => {
    const result = getTime('2020年3月1日');
    expect(result).toEqual({
      year: 2020,
      month: 3,
      day: 1,
      date: 1582992000000,
      dateDay: "2020年3月1日",
    });
  });
  it('传入为number,时间戳', () => {
    const result = getTime(1582992000000);
    expect(result).toEqual({
      year: 2020,
      month: 3,
      day: 1,
      date: 1582992000000,
      dateDay: "2020年3月1日",
    });
  });
});

