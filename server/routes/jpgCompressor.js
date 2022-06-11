const express = require('express')
const router = express.Router()
const compress_images = require("compress-images")
var cloudinary = require('cloudinary').v2
const fs = require('fs')
const path = require('path');
const multer = require('multer')
const dotenv = require('dotenv')
dotenv.config()

const storage = multer.diskStorage({ // notice you are calling the multer.diskStorage() method here, not multer()
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '.jpeg')
  }
});
const upload = multer({ storage }); //provide the return value from 



router.post('/', upload.single("file"), async (req, res) => {

  const deleteFilesFromDirectory = async () => {
    const folderPath = './output/compress/jpeg/'
    await fs.promises.readdir(folderPath)
      .then((f) => Promise.all(f.map(e => fs.promises.unlink(`${folderPath}${e}`))))
  }

  const uploadImageToCloudinary = () => {
    const imagePath = "output/compress/png/output.jpegfile.jpeg"
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    })
    cloudinary.uploader.upload(imagePath, function (err, result) {
      if (result) {
        console.log('Image uploaded succesfully: ', result)
        res.status(200).json({ success: true, message: 'Image data fetched successfully', data: result })
      } else {
        console.log('Error occured: ', err)
        res.status(400).send("Error occured while uploading, try again.")
      }
    })
  }

  const compressImage = async () => {
    INPUT_path_to_your_images = "uploads/file.jpeg"
    OUTPUT_path = "output/compress/png/output.jpeg";
    await compress_images(INPUT_path_to_your_images, OUTPUT_path, { compress_force: false, statistic: true, autoupdate: true }, false,
      { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
      { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
      { svg: { engine: "svgo", command: "--multipass" } },
      { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
      function (error, completed, statistic) {
        console.log("-------------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");
        uploadImageToCloudinary()
        deleteFilesFromDirectory()
      }
    );
  }


  console.log("File path: ", req.file.path)
  compressImage()

})


router.post('/online', async (req, res) => {

  const getImageInputPath = () => {
    const download = (url, path, callback) => {
      request.head(url, (err, res, body) => {
        request(url)
          .pipe(fs.createWriteStream(path))
          .on('close', callback)
      })
    }
    const url = 'https://res.cloudinary.com/buildthoughts/image/upload/v1638649330/Processor/xjrcyne4afjzyyuuvbrh.png'
    const path = './downloaded/compress/png/image.png'
    download(url, path, () => {
      console.log('✅ Done!')
    })

    return path
  }

  async function download(url, dest) {

    /* Create an empty file where we can save data */
    const file = fs.createWriteStream(dest);

    /* Using Promises so that we can use the ASYNC AWAIT syntax */
    await new Promise((resolve, reject) => {
      request({
        /* Here you should specify the exact link to the file you are trying to download */
        uri: url,
        gzip: true,
      })
        .pipe(file)
        .on('finish', async () => {
          console.log(`The file is finished downloading.`);
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    })
      .catch((error) => {
        console.log(`Something happened: ${error}`);
      });
  }
  // (async () => {
  //   const data = await download('https://res.cloudinary.com/buildthoughts/image/upload/v1638649330/Processor/xjrcyne4afjzyyuuvbrh.png', './downloaded/compress/png/hello.png');
  //   console.log(data); // The file is finished downloading.
  // })();

  //const inputImagePath = await getImageInputPath()

  INPUT_path_to_your_images = "uploads/file"
  OUTPUT_path = "output/compress/png/output.png";

  compress_images(INPUT_path_to_your_images, OUTPUT_path, { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
    function (error, completed, statistic) {
      console.log("-------------");
      console.log(error);
      console.log(completed);
      console.log(statistic);
      console.log("-------------");
    }
  );



})

module.exports = router