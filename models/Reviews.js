import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';
import sequelize from "../clients/db.sequelize.js";

class Reviews extends Model {

}

Reviews.init({
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

    rating: {
      type: DataTypes.STRING,
    },

    comment: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: db,
    modelName: 'reviews',
    tableName: 'reviews',
    timestamps: true,
  },
);

export default Reviews;