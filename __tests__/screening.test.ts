import { screening } from "../lib";

test('map为数组', ()=>{
  const data = [
    {
      name: '李梦冬20',
      children: []
    },
    {
      name: '李梦冬30',
      children: [
        {
          name: '李意睆',
          children: null
        }
      ]
    }
  ]
  const expected = [{name: '李梦冬20'},{name: '李梦冬30'}]
  const received = screening(data, ['name'])
  expect(received[0]).toMatchObject(expected[0])
  expect(received[1]).toMatchObject(expected[1])
})
test('map为对象', ()=>{
  const data = [
    {
      name: '李梦冬20',
      children: []
    },
    {
      name: '李梦冬30',
      children: []
    }
  ]
  const expected = [{name: '李梦冬20'},{name: '李梦冬30'}]
  const received = screening(data, {name: 'name'})
  expect(received[0]).toMatchObject(expected[0])
  expect(received[1]).toMatchObject(expected[1])
})