import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Favorites extends Model {

}

Favorites.init({
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
    modelName: 'favorites',
    tableName: 'favorites',
    timestamps: true,
  },
);

export default Favorites;