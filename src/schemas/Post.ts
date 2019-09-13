import { Schema, model } from 'mongoose'

import { PostInterface } from '../interfaces/Post'

const PostSchema = new Schema({
  title: String,
  text: String,
  author: String
}, {
  timestamps: true
})

export default model<PostInterface>('Post', PostSchema)
