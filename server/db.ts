import { Sequelize } from 'sequelize'

export const db = new Sequelize('postgres://localhost:5432/cookie-cat')

