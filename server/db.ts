import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize({
  logging: false,
  dialect: 'postgres',
  database: 'cookie-cat',
  models: [__dirname + '/models'],
})
