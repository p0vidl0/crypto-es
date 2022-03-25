"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HexFormatter = void 0;
const cipher_core_js_1 = require("./cipher-core.js");
const core_js_1 = require("./core.js");
exports.HexFormatter = {
    /**
     * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
     *
     * @param {CipherParams} cipherParams The cipher params object.
     *
     * @return {string} The hexadecimally encoded string.
     *
     * @static
     *
     * @example
     *
     *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
     */
    stringify(cipherParams) {
        return cipherParams.ciphertext.toString(core_js_1.Hex);
    },
    /**
     * Converts a hexadecimally encoded ciphertext string to a cipher params object.
     *
     * @param {string} input The hexadecimally encoded string.
     *
     * @return {CipherParams} The cipher params object.
     *
     * @static
     *
     * @example
     *
     *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
     */
    parse(input) {
        const ciphertext = core_js_1.Hex.parse(input);
        return cipher_core_js_1.CipherParams.create({ ciphertext });
    },
};
