/**
 * Rabbit stream cipher algorithm
 */
export class RabbitAlgo extends StreamCipher {
    ivSize: number;
    _doReset(): void;
    _X: any[] | undefined;
    _C: number[] | undefined;
    _b: number | undefined;
    _doProcessBlock(M: any, offset: any): void;
}
/**
 * Shortcut functions to the cipher's object interface.
 *
 * @example
 *
 *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
 *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
 */
export const Rabbit: Object;
import { StreamCipher } from "./cipher-core.js";
