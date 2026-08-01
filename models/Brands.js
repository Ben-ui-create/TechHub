import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Brands extends Model {

}

Brands.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    logo: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: db,
    modelName: 'brands',
    tableName: 'brands',
    timestamps: true,
  },
);

export default Brands;