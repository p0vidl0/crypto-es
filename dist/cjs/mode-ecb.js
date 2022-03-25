"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECB = void 0;
/**
 * Electronic Codebook block mode.
 */
const cipher_core_js_1 = require("./cipher-core.js");
class ECB extends cipher_core_js_1.BlockCipherMode {
}
exports.ECB = ECB;
ECB.Encryptor = class extends ECB {
    processBlock(words, offset) {
        this._cipher.encryptBlock(words, offset);
    }
};
ECB.Decryptor = class extends ECB {
    processBlock(words, offset) {
        this._cipher.decryptBlock(words, offset);
    }
};
