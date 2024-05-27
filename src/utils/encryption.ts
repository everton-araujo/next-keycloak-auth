import Cryptr from "cryptr";

export function encrypt(text: string) {
  const secretKey = process.env.NEXTAUTH_SECRET;
  const crypt = new Cryptr(secretKey);

  return crypt.encrypt(text);
}

export function decrypt(encryptedString: string) {
  const secretKey = process.env.NEXTAUTH_SECRET;
  const crypt = new Cryptr(secretKey);

  return crypt.decrypt(encryptedString);
}
