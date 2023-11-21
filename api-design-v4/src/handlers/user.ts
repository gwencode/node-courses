import prisma from "../db";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: await hashPassword(req.body.password),
      },
    });
    const token = createJWT(user);
    res.json({ token }); // res.json({ token: token });
  } catch (e) {
    e.type = "input";
    next(e);
  }
};

class AuthError extends Error {
  public type: string;
  public details: string;

  constructor(message: string, type: string, details: string) {
    super(message);
    this.type = type;
    this.details = details;
  }
}

export const signinUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      throw new AuthError("Unauthorized", "auth", "wrong username");
    }

    const isValid = await comparePassword(req.body.password, user.password);

    if (!isValid) {
      throw new AuthError("Unauthorized", "auth", "wrong password");
    }

    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    next(e);
  }
};
