import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        quantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        brand_uid: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'brands',
            key: 'uid',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Brand, {
      as: 'brand',
      foreignKey: 'brand_uid',
    });
  }
}

export default Product;
