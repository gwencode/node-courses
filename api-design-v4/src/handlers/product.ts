import prisma from "../db";

// Get all
export const allProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    include: { products: true },
  });
  const products = user.products;
  res.json({ data: products });
};

// Get one
export const findProduct = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: { id: req.params.id, userId: req.user.id },
  });
  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  }
  res.json({ data: product });
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        price: req.body.price,
        userId: req.user.id,
      },
    });
    res.json({ data: product });
  } catch (e) {
    next(e);
  }
};

export const updateProduct = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: { id: req.params.id, userId: req.user.id },
  });
  if (!product) {
    res.status(404).json({ error: "Product not found" });
    return;
  } else {
    const updated = await prisma.product.update({
      where: {
        id_userId: {
          id: req.params.id,
          userId: req.user.id,
        },
      },
      data: req.body,
    });
    res.json({ data: updated });
  }
};

export const deleteProduct = async (req, res) => {
  const deleted = await prisma.product.delete({
    where: {
      id_userId: {
        id: req.params.id,
        userId: req.user.id,
      },
    },
  });
  res.json({ data: deleted });
};
