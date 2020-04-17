'use strict';
const { getRegExp } = require('../dist');

test('测试getRegExp过滤非中文', () => {
  expect(getRegExp('asdaksd-%%%5qweq积分哈世界大会发', 'getChinese')).toBe('积分哈世界大会发');
});
test('测试getRegExp过滤中文', () => {
  expect(getRegExp('asdaksd%%3234&&积分哈世界大会发', 'getUChinese')).toBe('asdaksd%%3234&&');
});
test('测试getRegExp过滤中文', () => {
  console.log(getRegExp('123456哈四大皆空很疯狂al;sk', 'getNumber'))
  expect(getRegExp('123456哈四大皆空很疯狂al;sk', 'getNumber')).toBe('123456');
});
