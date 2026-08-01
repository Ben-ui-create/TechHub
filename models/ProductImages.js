import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class ProductImages extends Model {

}

ProductImages.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: db,
    modelName: 'productImages',
    tableName: 'productImages',
    timestamps: true,
  },
);

export default ProductImages;