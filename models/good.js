module.exports = ((sequelize, DataTypes) => (
  sequelize.define('good', {
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    end: {
      type: DataTypes.INTEGER,
      defaultValue: 24,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    timestamps: true,
    paranoid: true, // deletedAt(recover)
  })
));
