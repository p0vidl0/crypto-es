"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HmacSHA384 = exports.SHA384 = exports.SHA384Algo = void 0;
const x64_core_js_1 = require("./x64-core.js");
const sha512_js_1 = require("./sha512.js");
/**
 * SHA-384 hash algorithm.
 */
class SHA384Algo extends sha512_js_1.SHA512Algo {
    _doReset() {
        this._hash = new x64_core_js_1.X64WordArray([
            new x64_core_js_1.X64Word(0xcbbb9d5d, 0xc1059ed8),
            new x64_core_js_1.X64Word(0x629a292a, 0x367cd507),
            new x64_core_js_1.X64Word(0x9159015a, 0x3070dd17),
            new x64_core_js_1.X64Word(0x152fecd8, 0xf70e5939),
            new x64_core_js_1.X64Word(0x67332667, 0xffc00b31),
            new x64_core_js_1.X64Word(0x8eb44a87, 0x68581511),
            new x64_core_js_1.X64Word(0xdb0c2e0d, 0x64f98fa7),
            new x64_core_js_1.X64Word(0x47b5481d, 0xbefa4fa4),
        ]);
    }
    _doFinalize() {
        const hash = super._doFinalize.call(this);
        hash.sigBytes -= 16;
        return hash;
    }
}
exports.SHA384Algo = SHA384Algo;
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
 *     var hash = CryptoJS.SHA384('message');
 *     var hash = CryptoJS.SHA384(wordArray);
 */
exports.SHA384 = sha512_js_1.SHA512Algo._createHelper(SHA384Algo);
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
 *     var hmac = CryptoJS.HmacSHA384(message, key);
 */
exports.HmacSHA384 = sha512_js_1.SHA512Algo._createHmacHelper(SHA384Algo);
