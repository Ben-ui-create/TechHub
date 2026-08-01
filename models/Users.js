import {DataTypes, Model} from 'sequelize';
import md5 from 'md5';
import db from '../clients/db.sequelize.js';

const {PASSWORD_SECRET} = process.env;

class Users extends Model {
  static hashPassword(password) {
    return md5(md5(password) + PASSWORD_SECRET);
  }
}

Users.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue('password', Users.hashPassword(value));
      }
    },

    avatar: {
      type: DataTypes.STRING,
    },

    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },

    activationToken: {
      type: DataTypes.STRING,
    },

    role: {
      type: DataTypes.STRING,
      defaultValue: 'user',
    },
  }, {
    sequelize: db,
    modelName: 'users',
    tableName: 'users',
    timestamps: true,
  },
);

export default Users;