const prisma = require("../../utils/database");

const getAll = async (req, res) => {
  console.log({ exhibition: prisma.exhibition });

  try {
    const data = await prisma.exhibition.findMany();
    res.json({ data });
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};

module.exports = {
  getAll,
};
