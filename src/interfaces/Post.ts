import { Document } from 'mongoose'

export interface PostInterface extends Document {
  title?: string
  text?: string
  author?: string
}
