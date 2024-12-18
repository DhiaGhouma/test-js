var chat = require('../model/chatModel')

var socketIo = require('socket.io')
 
 
var socketIo = require('socket.io')

function socketIO(server) {
    const io = socketIo(server); 
    io.on("connection", (socket) => {  
        console.log("user connected with socket id " + socket.id); 
        socket.on('send-msg', async (data) => { 
            io.emit("msg", data);  
            await new chat({
                msg: data,
                dateCreation: new Date()
            }).save();  
        });
    });
    return io;  
}

function chatView(req, res, next){
    res.render('chats')
}

async function list(req,res,next){

    await chat.find().then((data,err)=>{
        if(err){
            res.status(503).json(err)       }
        else {
            res.status(200).json(data)
        }
    })
}
async function Deletechat (req,res,next) {
    const chatId = chat.params.id;
    await chat.findByIdAndDelete(chatId).then((data,err)=>{
        if(err){
            res.status(503).json(err)       }
        else {
            res.status(200).json(data)
        }
    })
    
}
async function updatechat(req,res,next){
    await chat.findByIdAndUpdate(req.params.id,req.body,{new: true})
    .then((data,err)=>{
        if(err){res.status(503).json(err)}
        
            res.status(200).json(data)    
    })
}

const create =async (req,res,next)=>{
    const { msg, dateCreation } = req.body 
    await new chat({
        msg : msg,
        dateCreation: new Date()

    }).save().then((err,data)=>{
        if(err){
            console.log('erreur de creation de chat!')
        }
        console.log(data);
    })
res.json('chat added ! message : '+ msg + ' date de creation : '+ new Date())
}

module.exports = { create, list, Deletechat, updatechat, socketIO, chatView }