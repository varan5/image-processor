const express = require('express')
const pngCompressorRouter = require('./routes/pngCompressor')
const jpgCompressorRouter = require('./routes/jpgCompressor')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use('/api/compressor/png', pngCompressorRouter)
app.use('/api/compressor/jpg', jpgCompressorRouter)

app.listen(port, () => console.log('Server running on port ' + port))