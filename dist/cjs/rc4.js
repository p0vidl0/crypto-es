"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RC4Drop = exports.RC4DropAlgo = exports.RC4 = exports.RC4Algo = void 0;
const cipher_core_js_1 = require("./cipher-core.js");
function generateKeystreamWord() {
    // Shortcuts
    const S = this._S;
    let i = this._i;
    let j = this._j;
    // Generate keystream word
    let keystreamWord = 0;
    for (let n = 0; n < 4; n += 1) {
        i = (i + 1) % 256;
        j = (j + S[i]) % 256;
        // Swap
        const t = S[i];
        S[i] = S[j];
        S[j] = t;
        keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
    }
    // Update counters
    this._i = i;
    this._j = j;
    return keystreamWord;
}
/**
 * RC4 stream cipher algorithm.
 */
class RC4Algo extends cipher_core_js_1.StreamCipher {
    _doReset() {
        // Shortcuts
        const key = this._key;
        const keyWords = key.words;
        const keySigBytes = key.sigBytes;
        // Init sbox
        this._S = [];
        const S = this._S;
        for (let i = 0; i < 256; i += 1) {
            S[i] = i;
        }
        // Key setup
        for (let i = 0, j = 0; i < 256; i += 1) {
            const keyByteIndex = i % keySigBytes;
            const keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;
            j = (j + S[i] + keyByte) % 256;
            // Swap
            const t = S[i];
            S[i] = S[j];
            S[j] = t;
        }
        // Counters
        this._j = 0;
        this._i = this._j;
    }
    _doProcessBlock(M, offset) {
        const _M = M;
        _M[offset] ^= generateKeystreamWord.call(this);
    }
}
exports.RC4Algo = RC4Algo;
RC4Algo.keySize = 256 / 32;
RC4Algo.ivSize = 0;
/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
 */
exports.RC4 = cipher_core_js_1.StreamCipher._createHelper(RC4Algo);
/**
 * Modified RC4 stream cipher algorithm.
 */
class RC4DropAlgo extends RC4Algo {
    constructor(...args) {
        super(...args);
        /**
         * Configuration options.
         *
         * @property {number} drop The number of keystream words to drop. Default 192
         */
        Object.assign(this.cfg, { drop: 192 });
    }
    _doReset() {
        super._doReset.call(this);
        // Drop
        for (let i = this.cfg.drop; i > 0; i -= 1) {
            generateKeystreamWord.call(this);
        }
    }
}
exports.RC4DropAlgo = RC4DropAlgo;
/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
 */
exports.RC4Drop = cipher_core_js_1.StreamCipher._createHelper(RC4DropAlgo);
