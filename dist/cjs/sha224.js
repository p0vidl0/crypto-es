"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HmacSHA224 = exports.SHA224 = exports.SHA224Algo = void 0;
const core_js_1 = require("./core.js");
const sha256_js_1 = require("./sha256.js");
/**
 * SHA-224 hash algorithm.
 */
class SHA224Algo extends sha256_js_1.SHA256Algo {
    _doReset() {
        this._hash = new core_js_1.WordArray([
            0xc1059ed8,
            0x367cd507,
            0x3070dd17,
            0xf70e5939,
            0xffc00b31,
            0x68581511,
            0x64f98fa7,
            0xbefa4fa4,
        ]);
    }
    _doFinalize() {
        const hash = super._doFinalize.call(this);
        hash.sigBytes -= 4;
        return hash;
    }
}
exports.SHA224Algo = SHA224Algo;
/**
 * Shortcut function to the hasher's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 *
 * @return {WordArray} The hash.
 *
 * @static
 *
 * @example
 *
 *     var hash = CryptoJS.SHA224('message');
 *     var hash = CryptoJS.SHA224(wordArray);
 */
exports.SHA224 = sha256_js_1.SHA256Algo._createHelper(SHA224Algo);
/**
 * Shortcut function to the HMAC's object interface.
 *
 * @param {WordArray|string} message The message to hash.
 * @param {WordArray|string} key The secret key.
 *
 * @return {WordArray} The HMAC.
 *
 * @static
 *
 * @example
 *
 *     var hmac = CryptoJS.HmacSHA224(message, key);
 */
exports.HmacSHA224 = sha256_js_1.SHA256Algo._createHmacHelper(SHA224Algo);
