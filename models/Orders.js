import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';
import sequelize from "../clients/db.sequelize.js";

class Orders extends Model {

}

Orders.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM('pending', 'paid', 'shipped', 'delivered', 'canceled'),
    },

    totalPrice: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: db,
    modelName: 'orders',
    tableName: 'orders',
    timestamps: true,
  },
);

export default Orders;
