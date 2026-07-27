const prisma = require("../config/prisma");

const findbyEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

const findById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, createdAt: true },
  });
};

const createUser = async (id, email, passwordHash) => {
  return prisma.user.create({
    data: { id, email, passwordHash },
    select: { id: true, name: true, email: true, createdAt: true },
  });
};

module.exports = { findbyEmail, findById, createUser };
