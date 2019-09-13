import { Request, Response } from 'express'

import Post from '../schemas/Post'

class PostController {
  public async index (req: Request, res: Response) : Promise<Response> {
    const posts = await Post.find()

    return res.json(posts)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const post = await Post.create(req.body)

    console.log(req.file)

    return res.json(post)
  }
}

export default new PostController()
