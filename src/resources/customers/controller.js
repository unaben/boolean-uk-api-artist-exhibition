const prisma = require("../../utils/database");

const getAll = async (req, res) => {
  console.log({ customer: prisma.customer });
  try {
    const data = await prisma.customer.findMany();
    res.json({ data });
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};

module.exports = {
  getAll,
};
