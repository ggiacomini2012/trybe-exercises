
const Books = require('../models/Books');

module.exports = async (req, res) => {
  const books = await Books.selectAllByAuthorId(req.params.id);
  return res.status(200).json(books);
};
