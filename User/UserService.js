var User = require('../User/userModel')
async function list(req,res,next){

    await User.find().then((data,err)=>{
        if(err){
            res.status(503).json(err)       }
        else {
            res.status(200).json(data)
        }
    })
}
async function DeleteUser (req,res,next) {
    const UserId = User.params.id;
    await User.findByIdAndDelete(UserId).then((data,err)=>{
        if(err){
            res.status(503).json(err)       }
        else {
            res.status(200).json(data)
        }
    })
    
}
async function updateUser(req,res,next){
    await User.findByIdAndUpdate(req.params.id,req.body,{new: true})
    .then((data,err)=>{
        if(err){res.status(503).json(err)}
        
            res.status(200).json(data)    
    })
}

const create =async (req,res,next)=>{
    const { nom, email } = req.body 
    console.log(req.body.nom);
    console.log(req.params.age)
    const { age } = req.params
    console.log(req.params);
    await new User({
        nom : nom,
        email: email,
        age: age

    }).save().then((err,data)=>{
        if(err){
            console.log('erreur de creation de user!')
        }
        console.log(data);
    })
res.json('User added ! nom : '+ nom + ' email : '+ email+ ' age : '+ age)
}

module.exports = { create, list, DeleteUser, updateUser }