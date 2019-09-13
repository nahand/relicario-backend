import * as express from 'express'
import * as cors from 'cors'
import * as mongoose from 'mongoose'
import * as morgan from 'morgan'

import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use(morgan('dev'))
    this.express.use(cors())
  }

  private database (): void {
    mongoose.set('useNewUrlParser', true)
    mongoose.set('useCreateIndex', true)
    mongoose.set('useUnifiedTopology', true)
    mongoose.set('useFindAndModify', false)
    mongoose
      .connect('mongodb://localhost:27017/api')
      .then((): void => {
        console.log('connected to db')
      })
      .catch((error): void => {
        console.log('error during database connection')
        console.log(error.message)
      })
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
