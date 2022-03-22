
const sum = (a, b) => {
  return a + b;
}

describe('test.spec.ts', () => {

  it('success when creating gpm product filter', async () => {
      // given
     const a = 10;
     const b = 20;

      // when
      const result = sum(a,b);

      // then
      expect(result).toEqual(40);
    });
});