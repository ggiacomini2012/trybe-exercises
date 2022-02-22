const connection = require('./connection');

const serialize = (authorData) => ({
  id: authorData.id,
  title: authorData.title,
  authorId: authorData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books;');
  return books.map(serialize).map(getNewAuthor);
};


const selectAllByAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    'SELECT * FROM books WHERE author_id = ?; ', [authorId]);
  return books.map(serialize);
};

module.exports = {
  selectAllByAuthorId,
  getAll,
};
