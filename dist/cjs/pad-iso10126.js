"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iso10126 = void 0;
const core_js_1 = require("./core.js");
/**
 * ISO 10126 padding strategy.
 */
exports.Iso10126 = {
    pad(data, blockSize) {
        // Shortcut
        const blockSizeBytes = blockSize * 4;
        // Count padding bytes
        const nPaddingBytes = blockSizeBytes - (data.sigBytes % blockSizeBytes);
        // Pad
        data
            .concat(core_js_1.WordArray.random(nPaddingBytes - 1))
            .concat(core_js_1.WordArray.create([nPaddingBytes << 24], 1));
    },
    unpad(data) {
        const _data = data;
        // Get number of padding bytes from last byte
        const nPaddingBytes = _data.words[(_data.sigBytes - 1) >>> 2] & 0xff;
        // Remove padding
        _data.sigBytes -= nPaddingBytes;
    },
};
