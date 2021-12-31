"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.sleep = void 0;
async function sleep(ms) {
    return new Promise(v => setTimeout(v, ms));
}
exports.sleep = sleep;
async function delay(sec) {
    await sleep(1000 * sec);
}
exports.delay = delay;
