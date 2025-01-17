import * as Crypto from 'expo-crypto';

const toNumberAlphabet = (n: number) => {
  return (n % 32).toString(32);
};

/**
 * primaryKeyとして使用するIDを生成します。
 * @returns 半角数字と半角英子文字で構成されたランダム値
 */
export const generateId = () => {
  const randomBytes = Crypto.getRandomBytes(16);
  return randomBytes.reduce((a, c) => a + toNumberAlphabet(c), '');
};
