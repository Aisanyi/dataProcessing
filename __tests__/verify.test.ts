import { verify } from '../lib'

test('测试邮箱号', () => {
  const email = "897023994@qq.com";
  const email2 = "aisanyili@qq.com";
  const expected = true;
  const received = verify(email, 'email');
  const received2 = verify(email2, 'email');
  expect(received).toBe(expected);
  expect(received2).toBe(expected);
})
test('测试身份证', () => {
  const idCard = "142724199612153132";
  const notIdCard = "142724300612153132";
  const expected = true;
  const received = verify(idCard, 'idCard');
  const notReceived = verify(notIdCard, 'idCard');
  expect(received).toBe(expected);
  expect(notReceived).toBe(false);
})