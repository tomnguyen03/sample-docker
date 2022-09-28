module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define('tutorial', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    abc: {
      type: Sequelize.STRING,
      defaultValue: 'abc',
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  })

  return Tutorial
}
