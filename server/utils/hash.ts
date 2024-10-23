import * as bcrypt from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
  const roundsOfHashing = 10;
  const salt = await bcrypt.genSalt(roundsOfHashing);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

export const validatePassword = async (
  password: string,
  hash: string,
): Promise<boolean> => bcrypt.compare(password, hash);
