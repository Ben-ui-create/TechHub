import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Carts extends Model {

}

Carts.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  }, {
    sequelize: db,
    modelName: 'carts',
    tableName: 'carts',
    timestamps: true,
  },
);

export default Carts;