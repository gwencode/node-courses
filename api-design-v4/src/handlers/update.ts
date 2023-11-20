import prisma from "../db";

export const allUpdates = async (req, res) => {
  const updates = await prisma.update.findMany();
  res.json(updates);
};

export const findUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: { id: req.params.id },
  });
  res.json(update);
};

export const createUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: { userId: req.user.id },
  });
  console.log(products);
  if (products.length === 0) {
    res.status(400).json({ error: "You don't have any product" });
    return;
  } else if (products.length > 1) {
    // Check if the user owns the product with the id provided in the request
    const product = products.find(
      (product) => product.userId === req.body.productId
    );
    if (!product) {
      res.status(400).json({ error: "Product not found" });
      return;
    } else if (product.userId !== req.user.id) {
      res.status(400).json({ error: "You don't own this product" });
      return;
    }
  }
  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      productId: req.body.productId,
      version: req.body.version,
      asset: req.body.asset,
    },
  });
  res.json(update);
};

export const updateUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: { id: req.params.id },
  });
  const new_update = await prisma.update.update({
    where: { id: req.params.id },
    data: {
      title: req.body.title || update.title,
      body: req.body.body || update.body,
      status: req.body.status || update.status,
      version: req.body.version || update.version,
      asset: req.body.asset || update.asset,
    },
  });
  res.json(new_update);
};

export const deleteUpdate = async (req, res) => {
  await prisma.update.delete({
    where: { id: req.params.id },
  });
  res.end("update deleted");
};
