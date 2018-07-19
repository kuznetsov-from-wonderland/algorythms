const getVersion = require('./index');

test('function getVersion exists', () => {
  expect(typeof getVersion).toEqual('function');
});

test('getVersion return correct version if passed 1.1 mask', () => {
  const v = '1.1';
  const version = getVersion(v);

  expect(version).toBe('1.1.190');
});

test('getVersion return correct version if passed 1.1.7 mask', () => {
  const v = '1.1.7';
  const version = getVersion(v);

  expect(version).toBe('1.1.7');
});

test('getVersion return correct version if passed 1.2 mask', () => {
  const v = '1.2';
  const version = getVersion(v);

  expect(version).toBe('1.22.3');
});

test('getVersion return correct version if passed 1. mask', () => {
  const v = '1.';
  const version = getVersion(v);

  expect(version).toBe('1.30.7');
});

test('getVersion return correct version if passed 3. mask', () => {
  const v = '3.';
  const version = getVersion(v);

  expect(version).toBe('3.5.2');
});

test('getVersion return correct version if not existing version passed', () => {
  const v = '10.';
  const version = getVersion(v);

  expect(version).toBe('');
});