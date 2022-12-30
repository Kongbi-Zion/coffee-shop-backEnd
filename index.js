const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const colors = require('colors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const multer = require('multer')
const port = process.env.PORT || 4000;

connectDB();
const app = express() 

app.use(cors({origin: true}))
app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routes())

///////////////  images upload ///////////////////

/// Setting up the storage
var storage = multer.diskStorage({
    destination: './images',
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage: storage})
app.use(express.static(__dirname + "/../build"))
/// Route for file upload
app.post("/api/v1/upload", upload.single('myFile'), (req, res,next)=>{
    res.sendStatus(200);
})

//// route for getting files from the server
app.get('/api/v1/upload')
app.use('/api/v1/images', express.static('images'))

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
