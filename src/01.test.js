
const sum = (a, b) => {
  return a + b;
}

test('test !!',  () => {
  // given
  const a = 10;
  const b = 20;

  // when
  const result = sum(a,b);
  console.log(result);

  // then
  expect(result).toEqual(40);
});