'use strict';
import { copyText } from '../lib'

test('测试copyText', () => {
  document.execCommand = jest.fn((str)=>{
    return true
  })
  expect(copyText('asdaksd-%%%5qweq积分哈世界大会发')).toBe(true);
});