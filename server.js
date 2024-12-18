var express = require('express')
var userRouter = require('./User/Controller')
var chatRouter = require('./controllers/ChatController')
var OsRouter = require('./Os/OsController')
var HotelRouter = require('./controllers/hotelController')
var productRouter = require('./products/productController')
var mongoose = require ('mongoose')
var { socketIO } = require('./Service/ChatService')
var path = require('path')

var app= express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
mongoose.connect('mongodb://localhost:27017/user-db')
.then(()=>
    {
        console.log("DB connected");

    })
.catch((error)=>{
    console.log("error :" + error)
})

app.use(express.json())
app.use('/os', OsRouter)
app.use('/users', userRouter)
app.use('/products', productRouter)
app.use('/chats', chatRouter)
app.use('/hotels', HotelRouter)
var http = require('http')
const io = socketIO(server);
var server = http.createServer(app)
server.listen(3000,()=>{
    console.log('server started !');
})