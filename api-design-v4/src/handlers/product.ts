import prisma from "../db";

export const createProduct = async (req, res) => {
  console.log(req.user);
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      price: req.body.price,
      userId: req.user.id,
    },
  });
  res.json(product);
};
