export async function sleep(ms: number) {
  return new Promise(v => setTimeout(v, ms));
}

export async function delay(sec: number) {
  await sleep(1000 * sec);
}