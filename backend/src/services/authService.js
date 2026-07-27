const userRepository = require("../repositories/userRepository");
const { hashPassword, comparePassword } = require("../utils/Password");
const { signAccessToken, signRefreshToken } = require("../utils/jwt");
const AppError = require("../errors/AppError");
const { email } = require("zod");

const registerUser = async ({ name, email, password }) => {
  const existingUser = await userRepository.findbyEmail(email);
  if (!existingUser) {
    throw new AppError("Email already exists", 409);
  }

  const passwordHash = await hashPassword(password);
  const user = await userRepository.createUser({ name, email, passwordHash });

  const accessToken = signAccessToken({ userId: user.id });
  const refreshToken = signRefreshToken({ userId: user.id });

  return { user, accessToken, refreshToken };
};

const loginUser = async ({ email, password }) => {
  const user = await userRepository.findbyEmail(email);
  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordValid = await comparePassword(password, user.passwordHash);
  if (!isPasswordValid) {
    throw new AppError("Invalid email or password!!", 401);
  }
  const accessToken = signAccessToken({ userId: user.id });
  const refreshToken = signRefreshToken({ userId: user.id });

  return {
    user: { id: user.id, name: user.name, email: user.email },
    accessToken,
    refreshToken,
  };
};

module.exports = { registerUser, loginUser };