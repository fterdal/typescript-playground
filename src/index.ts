import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('*', (req: any, res: any, next: any) => {
  res.send(`
    <h1>Path: ${req.path}</h1>
  `)
})

const PORT = 3000

const start = async () => {
  try {

    app.listen(PORT, async () => {
      console.log(`Listening from port ${PORT}`)
    })
  } catch (err) {
    console.log('Oh no! Something went wrong.', err)
  }
}
start()
