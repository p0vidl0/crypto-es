/**
 * AES block cipher algorithm.
 */
export class AESAlgo extends BlockCipher {
    _doReset(): void;
    _keyPriorReset: import("./core.js").WordArray | undefined;
    _nRounds: number | undefined;
    _keySchedule: any[] | undefined;
    _invKeySchedule: any[] | undefined;
    encryptBlock(M: any, offset: any): void;
    decryptBlock(M: any, offset: any): void;
    _doCryptBlock(M: any, offset: any, keySchedule: any, SUB_MIX_0: any, SUB_MIX_1: any, SUB_MIX_2: any, SUB_MIX_3: any, SBOX: any): void;
}
export namespace AESAlgo {
    const keySize: number;
}
/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
 */
export const AES: Object;
import { BlockCipher } from "./cipher-core.js";
