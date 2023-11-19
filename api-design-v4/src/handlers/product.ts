import prisma from "../db";

export const allProducts = async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
};

export const findProduct = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: { id: req.params.id },
  });
  res.json(product);
};

export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      price: req.body.price,
      userId: req.user.id,
    },
  });
  res.json(product);
};

export const updateProduct = async (req, res) => {
  const product = await prisma.product.update({
    where: { id: req.params.id },
    data: {
      name: req.body.name,
      price: req.body.price,
    },
  });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  await prisma.product.delete({
    where: { id: req.params.id },
  });
  res.end("product deleted");
};
