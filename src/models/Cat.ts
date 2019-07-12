import * as  Sequelize from 'sequelize'

export interface CatAttributes {
  id?: number
  name: string
  createdAt?: Date
  updatedAt?: Date
}

export interface CatInstance extends Sequelize.Instance<CatAttributes>, CatAttributes {

}
