/**
 * DES block cipher algorithm.
 */
export class DESAlgo extends BlockCipher {
    _doReset(): void;
    _subKeys: any[] | undefined;
    _invSubKeys: any[] | undefined;
    encryptBlock(M: any, offset: any): void;
    decryptBlock(M: any, offset: any): void;
    _doCryptBlock(M: any, offset: any, subKeys: any): void;
    _lBlock: any;
    _rBlock: any;
}
export namespace DESAlgo {
    const keySize: number;
    const ivSize: number;
    const blockSize: number;
}
/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
 */
export const DES: Object;
/**
 * Triple-DES block cipher algorithm.
 */
export class TripleDESAlgo extends BlockCipher {
    _doReset(): void;
    _des1: import("./cipher-core.js").Cipher | undefined;
    _des2: import("./cipher-core.js").Cipher | undefined;
    _des3: import("./cipher-core.js").Cipher | undefined;
    encryptBlock(M: any, offset: any): void;
    decryptBlock(M: any, offset: any): void;
}
export namespace TripleDESAlgo {
    const keySize_1: number;
    export { keySize_1 as keySize };
    const ivSize_1: number;
    export { ivSize_1 as ivSize };
    const blockSize_1: number;
    export { blockSize_1 as blockSize };
}
/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
 */
export const TripleDES: Object;
import { BlockCipher } from "./cipher-core.js";
