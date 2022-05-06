const { calculateWindow } = require('./window');

test('Word "window" => "windo" should equal 5', () => {
  expect(calculateWindow('window')).toBe(5);
});

test('Word "jujitsu" => "jitsu" should equal 5', () => {
  expect(calculateWindow('jujitsu')).toBe(5);
});

test('Word "apple" => "ple" should equal 3', () => {
  expect(calculateWindow('apple')).toBe(3);
});

test('Word "calculator" => "culator" should equal 4', () => {
  expect(calculateWindow('calculator')).toBe(7);
});
