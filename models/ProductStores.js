import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class ProductStores extends Model {

}

ProductStores.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    storeId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    stock: {
      type: DataTypes.STRING,
    },

    url: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: db,
    modelName: 'productStores',
    tableName: 'productStores',
    timestamps: true,
  },
);

export default ProductStores;