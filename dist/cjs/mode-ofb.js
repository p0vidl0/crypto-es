"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OFB = void 0;
/**
 * Output Feedback block mode.
 */
const cipher_core_js_1 = require("./cipher-core.js");
class OFB extends cipher_core_js_1.BlockCipherMode {
}
exports.OFB = OFB;
OFB.Encryptor = class extends OFB {
    processBlock(words, offset) {
        const _words = words;
        // Shortcuts
        const cipher = this._cipher;
        const { blockSize } = cipher;
        const iv = this._iv;
        let keystream = this._keystream;
        // Generate keystream
        if (iv) {
            this._keystream = iv.slice(0);
            keystream = this._keystream;
            // Remove IV for subsequent blocks
            this._iv = undefined;
        }
        cipher.encryptBlock(keystream, 0);
        // Encrypt
        for (let i = 0; i < blockSize; i += 1) {
            _words[offset + i] ^= keystream[i];
        }
    }
};
OFB.Decryptor = OFB.Encryptor;
