const invert = require('../lib/invert-transformer');
const grayscale = require('../lib/grayscale-transformer');
const bluescale = require('../lib/bluescale-transformer');

describe('transformers', () => {
  it('invert', () => {
    const transformed = invert({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 221,
      g: 155,
      b: 50
    });
  });

  it('grayscale', () => {
    const transformed = grayscale({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 113,
      g: 113,
      b: 113
    });
  });

  it('bluescale', () => {
    const transformed = bluescale({
      r: 34,
      g: 100,
      b: 205
    });

    expect(transformed).toEqual({
      r: 0,
      g: 0,
      b: 255
    });
  });
});
