import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Products extends Model {
  static lower(value) {
    return value.toLowerCase();
  }
}

Products.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    slug: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('title', Products.lower(value));
      },
    },

    description: {
      type: DataTypes.STRING,
    },

    image: {
      type: DataTypes.STRING,
    },

    brandId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    categoryId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  }, {
    sequelize: db,
    modelName: 'products',
    tableName: 'products',
    timestamps: true,
  },
);

export default Products;