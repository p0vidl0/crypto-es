/* eslint-disable no-undef */
import C from '../src/index.js';

describe('sha224', () => {
  it('vector 1', () => {
    expect(C.SHA224('').toString())
      .toBe('d14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f');
  });

  it('vector 2', () => {
    expect(C.SHA224('The quick brown fox jumps over the lazy dog').toString())
      .toBe('730e109bd7a8a32b1cb9d9a09aa2325d2430587ddbc0c38bad911525');
  });

  it('vector 3', () => {
    expect(C.SHA224('The quick brown fox jumps over the lazy dog.').toString())
      .toBe('619cba8e8e05826e9b8c519c0a5c68f4fb653e8a3d8aa04bb2c8cd4c');
  });
});
