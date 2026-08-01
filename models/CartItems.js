import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class CartItems extends Model {
}

CartItems.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    cardId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    count: {
      type: DataTypes.NUMBER,
    },
  }, {
    sequelize: db,
    modelName: 'cartItems',
    tableName: 'cartItems',
    timestamps: true,
  },
);

export default CartItems;