import * as CryptoJS from "crypto-js";
const keyCrypto = "e4f38dfdb6046b5540d91ba8560546a5";

export const _setStorage = (key: string, body: any) => {
  const setType = JSON.stringify(body);
  const ciphertext = CryptoJS.AES.encrypt(setType, keyCrypto).toString();
  localStorage.setItem(key, ciphertext);
};

export const _getStorage = (key: string) => {
  const body =
    typeof window !== "undefined" ? localStorage.getItem(key) : false;
  try {
    if (body) {
      var bytes = CryptoJS.AES.decrypt(body, keyCrypto);
      var originalText = bytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(originalText);
    }
  } catch (error) {
    return body;
  }
};

export const _deleteStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const _deleteAllStorage = () => {
  localStorage.clear();
};

export const _setEncode = (value: any) => {
  const setType = JSON.stringify(value);
  const ciphertext = CryptoJS.AES.encrypt(setType, keyCrypto).toString();
  const encodeURL = encodeURIComponent(ciphertext);
  return encodeURL;
};

export const _getDecode = (value: string) => {
  const decodeURL = decodeURIComponent(value);
  const bytes = CryptoJS.AES.decrypt(decodeURL, keyCrypto);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(originalText);
};
