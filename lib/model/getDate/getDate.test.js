'use strict';
const getDate = require('../../../dist/index').getDate;

describe('ts-hi function test', () => {
  it('getDate()返回的属性和属性值', () => {
    const result = getDate('2020.3.1');
    expect(result).toEqual({
      year: 2020,
      month: 3,
      day: 2020,
      date: 1582992000000,
      dateDay: "2020年3月2020日",
    });
  });
});

