module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define(
    'UserBook',
    {},
    {
      timestamps: false,
      underscored: true, // transforma em camel case
      tableName: 'users_books',
    });

    // funcao de associar, informar para o UserBook quem esta associado a ele e de qual forma.
    UserBook.associate = (models) => {
      models.Book.belongsToMany(models.User, {
        as: 'users',
        through: UserBook,
        foreignKey: 'bookId', // se refere ao id de Book na tabela de `users_books`
        otherKey: 'userId', // se refere a outra chave de `users_books`
      });
      models.User.belongsToMany(models.Book, {
        as: 'books',
        through: UserBook,
        foreignKey: 'userId', // se refere ao id de User na tabela de `users_books`
        otherKey: 'bookId',
      });
    };

  return UserBook;
};