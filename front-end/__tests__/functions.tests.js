import React from 'react';
import { sayHello } from '../src/services/stateFunctions';
import { mount } from 'enzyme';

test('greets the makers', () => {
  const greeting = sayHello();

  expect(greeting).toEqual(
    '🔫 💣 🔎 🎈 🎁 🔥'
  );
});
