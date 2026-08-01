
const requireEnv = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
};

const env = {
  jwtAccessSecret: requireEnv('JWT_ACCESS_SECRET'),
  jwtRefreshSecret: requireEnv('JWT_REFRESH_SECRET'),
  jwtAccessExpiry: process.env.JWT_ACCESS_EXPIRY || '15m',
  jwtRefreshExpiry: process.env.JWT_REFRESH_EXPIRY || '7d',
  bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
  nodeEnv: process.env.NODE_ENV || 'development',
  cloudinaryCloudName: requireEnv('CLOUDINARY_CLOUD_NAME'),
cloudinaryApiKey: requireEnv('CLOUDINARY_API_KEY'),
cloudinaryApiSecret: requireEnv('CLOUDINARY_API_SECRET'),
};

module.exports = env;