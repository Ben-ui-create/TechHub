import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Specifications extends Model {

}

Specifications.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    productId: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },

    display: {
      type: DataTypes.STRING,
    },

    processor: {
      type: DataTypes.STRING,
    },

    ram: {
      type: DataTypes.STRING,
    },

    storage: {
      type: DataTypes.STRING,
    },

    camera: {
      type: DataTypes.STRING,
    },

    battery: {
      type: DataTypes.STRING,
    },

    weight: {
      type: DataTypes.STRING,
    },

    os: {
      type: DataTypes.STRING,
    },

    color: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: db,
    modelName: 'specifications',
    tableName: 'specifications',
    timestamps: true,
  },
);

export default Specifications;