describe('Object.entries', () => {
  it('should return an array of key/value paires', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const entries = Object.entries(obj);
    expect(entries).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
