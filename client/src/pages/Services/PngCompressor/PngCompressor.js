import React, { useState } from 'react'
import { simplePostCall } from '../../../api/ApiServices'
import Loader from '../../../components/Loader/Loader'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const PngCompressor = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [loader, setLoader] = useState(false)
  const [showDownloadButton, setShowDownloadButton] = useState(false)
  const [originalDownloadImageUrl, setOriginalDownloadImageUrl] = useState('')
  const [completedGif, setCompletedGif] = useState(false)
  const [showCompressAgainButton, setShowCompressAgainButton] = useState(false)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const Input = styled('input')({
    display: 'none',
  });

  const parseRawToOriginalUrl = (rawUrl) => {
    const frontUrl = rawUrl.substr(0, 54)
    const middleUrl = 'fl_attachment:CompressedImage_'
    const endUrl = rawUrl.substr(54, rawUrl.length)
    const newUrl = frontUrl + middleUrl + endUrl
    setOriginalDownloadImageUrl(newUrl)
    console.log('Url: ', rawUrl)
    console.log('Front url: ', frontUrl)
    console.log('End url: ', endUrl)
    console.log('New url: ', newUrl)
    toast.success('Image ready to download !')
  }

  const onSubmitImage = async () => {
    // const data = new FormData()
    // data.append('file', selectedFile)
    // data.append('upload_preset', 'Preset Name')
    // data.append('cloud_name', 'Cloud Name')
    // const config = {
    //   method: "POST",
    //   body: data
    // };
    // const response = await fetch("https://api.cloudinary.com/v1_1/cloud_name/image/upload",
    //   config
    // )
    // const file = await response.json()
    // console.log('File: ', file.secure_url)

    setLoader(true)
    const data = new FormData()
    data.append("file", selectedFile)
    data.append("name", "myfile")
    simplePostCall("https://image-processorr.herokuapp.com/api/compressor/png", data)
      .then(response => {
        console.log('Response: ', response.data.data.secure_url)
        setShowDownloadButton(true)
        parseRawToOriginalUrl(response.data.data.secure_url)
        setLoader(false)
        setCompletedGif(true)

      })
      .catch(error => {
        console.log('Error: ', error)
        setLoader(false)
      })

  };

  const onImageDownload = () => {
    console.log('Downloading image')
    // https://res.cloudinary.com/cloud_name/image/upload/fl_attachment:ShreyasBansode_v1632891589/yn3eebcv7qg0bwm4dceb.png
    // https://res.cloudinary.com/cloud_name/image/upload/v1638700214/zx5qd2e5wiaxsq1buqv9.png
  }

  const onDownloadButtonClick = () => {
    setShowCompressAgainButton(true)
  }

  return (
    <div>
      {
        !loader ? <div>
          <h3>Png Compressor</h3>
          <Input accept="image/png" type="file" name="file" onChange={changeHandler} id="contained-button-file" multiple type="file" />
          <div>
            {isSelected ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
              </div>
            ) :
              ''}

          </div>

          <label htmlFor="contained-button-file">
            <Button variant="contained" component="span">
              {isSelected ? "Png Uploaded" : "Upload Png Image"}
            </Button>
          </label>

          {console.log("Selected file", selectedFile)}
          {
            isSelected && !showDownloadButton ?
              <Button variant="contained" component="span" onClick={onSubmitImage}>
                Compress Png Image
              </Button>

              : ''
          }


          {
            showDownloadButton ?
              <Button variant="contained" component="span" onClick={onDownloadButtonClick}>
                <a href={originalDownloadImageUrl}
                >
                  Download Compressed Image
                </a>
              </Button>

              : ''
          }


          {
            showCompressAgainButton ?
              <Link to="/services">
                <Button variant="contained" component="span" >
                  Compress Again ?
                </Button>
              </Link>
              : ''
          }


          {completedGif ?
            <div>
              <img src="assets/gifs/completed.gif" style={{ height: '60%', width: '50%', position: 'relative' }} />
            </div>

            : ''
          }
        </div>
          :
          <div>
            <Loader />
            <h3>Image being compressed...</h3>
            <img style={{ height: '50%', width: '50%' }} src="assets/gifs/image-processing.gif" />
          </div>
      }
    </div>
  )
}

export default PngCompressor

