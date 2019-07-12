import { Sequelize, DataTypes } from 'sequelize'
import { Table, Column, Model, HasMany } from 'sequelize-typescript'

export const db = new Sequelize('postgres://localhost:5432/cookie-cat', {
  logging: false,
})

@Table
export class Cat extends Model<Cat> {
  @Column
  name!: string
}

export const seedCats = [
  {
    name: 'Rigatoni',
  },
  {
    name: 'Tom',
  },
]
