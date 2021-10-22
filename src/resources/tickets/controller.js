const prisma = require("../../utils/database");

const getAll = async (req, res) => {
  console.log({ ticket: prisma.ticket });
  try {
    const data = await prisma.ticket.findMany();
    res.json({ data });
  } catch (error) {
    console.error("[ERROR] getAll: ", { error });
    res.json({ error });
  }
};

module.exports = {
  getAll,
};
