import * as user from "../user";

// Not a good test

describe("user handler", () => {
  it("should create a new user", async () => {
    const req = { body: { username: "UserTest", password: "test" } };
    const res = {
      json({ token }) {
        expect(token).toBeDefined();
      },
    };

    await user.createNewUser(req, res, () => {});
  });
});
