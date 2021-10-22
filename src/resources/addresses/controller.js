const prisma = require("../../utils/database");

const getAll = async (req, res) => {
  console.log({ address: prisma.address });

  try {
    const data = await prisma.address.findMany();
    res.json({ data });
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};

module.exports = {
  getAll,
};
