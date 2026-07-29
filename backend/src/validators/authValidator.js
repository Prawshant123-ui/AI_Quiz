const z= require('zod')

 const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters.")
    .max(30, "Username cannot exceed 30 characters.")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain letters, numbers, and underscores."
    ),

  email: z
    .email("Invalid email address.")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password cannot exceed 100 characters.")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
    .regex(/[0-9]/, "Password must contain at least one number.")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character."
    ),
});

 const loginSchema = z.object({
  email: z
    .email("Invalid email address.")
    .trim()
    .toLowerCase(),

  password: z
    .string()
    .min(1, "Password is required."),
});

module.exports={registerSchema,loginSchema}