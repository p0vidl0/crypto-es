"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Iso97971 = void 0;
const core_js_1 = require("./core.js");
const pad_zeropadding_js_1 = require("./pad-zeropadding.js");
/**
 * ISO/IEC 9797-1 Padding Method 2.
 */
exports.Iso97971 = {
    pad(data, blockSize) {
        // Add 0x80 byte
        data.concat(core_js_1.WordArray.create([0x80000000], 1));
        // Zero pad the rest
        pad_zeropadding_js_1.ZeroPadding.pad(data, blockSize);
    },
    unpad(data) {
        const _data = data;
        // Remove zero padding
        pad_zeropadding_js_1.ZeroPadding.unpad(_data);
        // Remove one more byte -- the 0x80 byte
        _data.sigBytes -= 1;
    },
};
