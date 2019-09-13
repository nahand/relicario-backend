import * as multer from 'multer'
import path from 'path'
// import crypto from 'crypto'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', '..', 'temp', 'uploads'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage }).single('file')

export default upload
