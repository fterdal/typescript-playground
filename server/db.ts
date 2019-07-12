import { Sequelize, Model, DataTypes } from 'sequelize'

export const db = new Sequelize('postgres://localhost:5432/cookie-cat', {
  logging: false,
})



export const seedCats = [
  {
    name: 'Rigatoni',
  },
  {
    name: 'Tom',
  },
]
