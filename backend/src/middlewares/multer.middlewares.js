import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "c:/Users/poloj/OneDrive/Documents/Projects/Backend development/VideoTube/public/temp")
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //   cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, file.originalname)
    }
  })
  
export const upload = multer({ storage })