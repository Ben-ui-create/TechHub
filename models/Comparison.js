import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Comparison extends Model {

}

Comparison.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  }, {
    sequelize: db,
    modelName: 'comparison',
    tableName: 'comparison',
    timestamps: true,
  },
);

export default Comparison;