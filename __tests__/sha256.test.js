/* eslint-disable no-undef */
import C from '../src/index.js';

describe('sha256', () => {
  it('vector 1', () => {
    expect(C.SHA256('').toString()).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  });

  it('vector 2', () => {
    expect(C.SHA256('a').toString()).toBe('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb');
  });

  it('vector 3', () => {
    expect(C.SHA256('abc').toString()).toBe('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
  });

  it('vector 4', () => {
    expect(C.SHA256('message digest').toString()).toBe('f7846f55cf23e14eebeab5b4e1550cad5b509e3348fbc4efa3a1413d393cb650');
  });

  it('vector 5', () => {
    expect(C.SHA256('abcdefghijklmnopqrstuvwxyz').toString())
      .toBe('71c480df93d6ae2f1efad1447c66c9525e316218cf51fc8d9ed832f2daf18b73');
  });

  it('vector 6', () => {
    expect(C.SHA256('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789').toString())
      .toBe('db4bfcbd4da0cd85a60c3c37d3fbd8805c77f15fc6b1fdfe614ee0a7c8fdb4c0');
  });

  it('vector 7', () => {
    expect(C.SHA256('12345678901234567890123456789012345678901234567890123456789012345678901234567890').toString())
      .toBe('f371bc4a311f2b009eef952dd83ca80e2b60026c8e935592d0f9c308453c813e');
  });

  it('update and long message', () => {
    const sha256 = C.algo.SHA256.create();
    for (let i = 0; i < 100; i += 1) {
      sha256.update('12345678901234567890123456789012345678901234567890');
    }

    expect(sha256.finalize().toString()).toBe('f8146961d9b73d8da49ccd526fca65439cdd5b402f76971556d5f52fd129843e');
  });

  it('clone', () => {
    const sha256 = C.algo.SHA256.create();

    expect(sha256.update('a').clone().finalize().toString()).toBe(C.SHA256('a').toString());
    expect(sha256.update('b').clone().finalize().toString()).toBe(C.SHA256('ab').toString());
    expect(sha256.update('c').clone().finalize().toString()).toBe(C.SHA256('abc').toString());
  });

  it('input integrity', () => {
    const message = C.lib.WordArray.create([0x12345678]);

    const expected = message.toString();

    C.SHA256(message);

    expect(message.toString()).toBe(expected);
  });

  it('helper', () => {
    expect(C.SHA256('').toString()).toBe(C.algo.SHA256.create().finalize('').toString());
  });

  it('hmacHelper', () => {
    expect(C.HmacSHA256('Hi There', C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).toString())
      .toBe(C.algo.HMAC.create(C.algo.SHA256, C.enc.Hex.parse('0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b')).finalize('Hi There').toString());
  });
});
