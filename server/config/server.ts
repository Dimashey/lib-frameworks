import { registerAs } from '@nestjs/config';

export default registerAs('server', () => ({
  jwtSecret: process.env.JWT_SECRET,
}));
