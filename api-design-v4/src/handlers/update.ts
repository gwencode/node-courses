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
  const update = await prisma.update.create({
    data: {
      title: req.body.title,
      body: req.body.body,
      productId: req.product.id,
    },
  });
  res.json(update);
};

export const updateUpdate = async (req, res) => {
  const update = await prisma.update.update({
    where: { id: req.params.id },
    data: {
      title: req.body.title,
      body: req.body.body,
      productId: req.product.id,
    },
  });
  res.json(update);
};

export const deleteUpdate = async (req, res) => {
  await prisma.update.delete({
    where: { id: req.params.id },
  });
  res.end("update deleted");
};
