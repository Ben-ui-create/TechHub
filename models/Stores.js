import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Stores extends Model {

}

Stores.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
    },

    logo: {
      type: DataTypes.STRING,
    },

    website: {
      type: DataTypes.STRING,
    },

    address: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: db,
    modelName: 'stores',
    tableName: 'stores',
    timeStamp: true,
  },
);

export default Stores;