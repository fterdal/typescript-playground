import { Sequelize, Model, DataTypes } from 'sequelize'

export const sequelize = new Sequelize('postgres://localhost:5432/cookie-cat', {
  logging: false,
})

// export const Cat = sequelize.define('cat', {
//   name: DataTypes.STRING,
// })

export class Cat extends Model {
  public name!: string
}

Cat.init(
  {
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'cats'
  }
)

export const seedCats = [
  {
    name: 'Rigatoni',
  },
  {
    name: 'Tom',
  },
]
