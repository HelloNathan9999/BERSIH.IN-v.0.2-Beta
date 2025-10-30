import bcrypt from "bcryptjs";

export const hashPassword = async (plainText: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(plainText, salt);
};

export const verifyPassword = async (plainText: string, hash: string) => {
  return await bcrypt.compare(plainText, hash);
};
