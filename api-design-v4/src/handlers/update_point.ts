import prisma from "../db";

export const allUpdatePoints = async (req, res) => {
  const updatepoints = await prisma.updatePoint.findMany();
  res.json(updatepoints);
};

export const findUpdatePoint = async (req, res) => {
  const updatepoint = await prisma.updatePoint.findUnique({
    where: { id: req.params.id },
  });
  res.json(updatepoint);
};

export const createUpdatePoint = async (req, res) => {
  const updatepoint = await prisma.updatePoint.create({
    data: {
      name: req.body.name,
      description: req.description.body,
      updateId: req.update.id,
    },
  });
  res.json(updatepoint);
};

export const updateUpdatePoint = async (req, res) => {
  const updatepoint = await prisma.updatePoint.update({
    where: { id: req.params.id },
    data: {
      name: req.body.name,
      description: req.description.body,
      updateId: req.update.id,
    },
  });
  res.json(updatepoint);
};

export const deleteUpdatePoint = async (req, res) => {
  await prisma.updatePoint.delete({
    where: { id: req.params.id },
  });
  res.end("updatepoint deleted");
};
