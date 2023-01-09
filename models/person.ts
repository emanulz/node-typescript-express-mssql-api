import { DataTypes } from 'sequelize'
import db from '../db/connection'

const Person = db.define(
  'People',
  {
    name: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.FLOAT,
    },
    mass: {
      type: DataTypes.FLOAT,
    },
    hair_color: {
      type: DataTypes.STRING,
    },
    skin_color: {
      type: DataTypes.STRING,
    },
    url: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
)

export default Person
