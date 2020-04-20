'use strict';
import { removeChild } from '../lib'

test('data为数组,删除空children', ()=>{
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
  const expected = [
    {
      name: '李梦冬20'
    },
    {
      name: '李梦冬30',
      children: [
        {
          name: '李意睆'
        }
      ]
    }
  ]
  const received = removeChild(data)
  expect(received[0]).toMatchObject(expected[0])
  expect(received[1]).toMatchObject(expected[1])
})
test('data为数组为空,删除空children', ()=>{
  const data: any[] = []
  const expected: any[] = []
  const received = removeChild(data)
  expect(received).toStrictEqual(expected)
})
test('data为对象,删除空children', ()=>{
  const data = {
    name: '李波',
    children: [
      {
        name: '李梦冬',
        children: ''
      },
      {
        name: '李梦君',
        children: null
      }
    ]
  }
  const expected = {
    name: '李波',
    children: [
      {
        name: '李梦冬'
      },
      {
        name: '李梦君'
      }
    ]
  }
  const received = removeChild(data)
  expect(received).toMatchObject(expected)
})
test('data为对象,并且children为null,删除空children', ()=>{
  const data = {
    name: '李波',
    children: null
  }
  const expected = {
    name: '李波'
  }
  const received = removeChild(data)
  expect(received).toMatchObject(expected)
})
test('data为对象,并且为空对象,删除空children', ()=>{
  const data = {}
  const expected = {}
  const received = removeChild(data)
  expect(received).toEqual(expected)
})