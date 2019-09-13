import { Router } from 'express'
import PostController from './controllers/PostController'

import upload from './config/upload'

const routes = Router()

routes.get('/posts', PostController.index)
routes.post('/posts', upload, PostController.store)

export default routes
