import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';
import sequelize from "../clients/db.sequelize.js";

class OrderItems extends Model {

}

OrderItems.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    orderId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    price: {
      type: DataTypes.STRING,
    },

    count: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: db,
    modelName: 'orderItems',
    tableName: 'orderItems',
    timestamps: true,
  },
);

export default OrderItems;