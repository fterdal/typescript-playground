import { Cat } from './models/Cat'

export const seed = async () => {
  const rigatoni = new Cat({ name: 'Rigatoni' })
  await rigatoni.save()
  // console.log(await Cat.findAll())
}
