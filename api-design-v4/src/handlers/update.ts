import prisma from "../db";

export const getUpdates = async (req, res) => {
  const products = await prisma.product.findMany({
    where: { userId: req.user.id },
    include: { updates: true },
  });
  const updates = products.reduce((allUpdates, product) => {
    return [...allUpdates, ...product.updates];
  }, []);
  res.json({ data: updates });
};

export const findUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: { id: req.params.id },
  });
  res.json({ data: update });
};

export const createUpdate = async (req, res) => {
  const products = await prisma.product.findMany({
    where: { userId: req.user.id },
  });
  if (products.length === 0) {
    res.status(400).json({ error: "You don't have any product" });
    return;
  } else if (products.length > 0) {
    // Check if the user owns the product with the id provided in the request
    const product = products.find(
      (product) => product.id === req.body.productId
    );
    if (!product) {
      res.status(400).json({ error: "Product not found" });
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
  res.json({ data: update });
};

export const updateUpdate = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: {
      userId: req.user.id,
      updates: {
        some: {
          id: req.params.id,
        },
      },
    },
  });

  if (!product) {
    res.status(400).json({ error: "Update not found" });
    return;
  }

  const update = await prisma.update.update({
    where: { id: req.params.id },
    data: req.body,
  });
  res.json({ data: update });
};

export const deleteUpdate = async (req, res) => {
  const product = await prisma.product.findFirst({
    where: {
      userId: req.user.id,
      updates: {
        some: {
          id: req.params.id,
        },
      },
    },
  });

  if (!product) {
    res.status(400).json({ error: "Update not found" });
    return;
  }

  const deleted = await prisma.update.delete({
    where: { id: req.params.id },
  });
  res.json({ data: deleted });
};
