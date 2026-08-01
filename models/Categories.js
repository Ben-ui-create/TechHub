import {DataTypes, Model} from 'sequelize';
import db from '../clients/db.sequelize.js';

class Categories extends Model {
  static lower(value) {
    return value.toLowerCase();
  }
}

Categories.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    slug: {
      type: DataTypes.STRING,
      set(value) {
        this.setDataValue('name', Categories.lower(value))
      }
    },

    icon: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: db,
    modelName: 'categories',
    tableName: 'categories',
    timestamps: true,
  },
);

export default Categories;