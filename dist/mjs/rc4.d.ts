/**
 * RC4 stream cipher algorithm.
 */
export class RC4Algo extends StreamCipher {
    _doReset(): void;
    _S: any[] | undefined;
    _j: number | undefined;
    _i: number | undefined;
    _doProcessBlock(M: any, offset: any): void;
}
export namespace RC4Algo {
    const keySize: number;
    const ivSize: number;
}
/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
 */
export const RC4: Object;
/**
 * Modified RC4 stream cipher algorithm.
 */
export class RC4DropAlgo extends RC4Algo {
}
/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
 */
export const RC4Drop: Object;
import { StreamCipher } from "./cipher-core.js";
