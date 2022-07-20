const product = require('../models/product')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class childmancontroller{
    // Get /news
    index(req,res,next){
        product.find({})
        .then(product => {
            res.render('child-man',{
                product: mutipleMongooseToObject(product)
            })}
        )
        .catch(next)
    }
    
    // Get /search
    search(req,res){
        res.send('Không thể tìm kiếm')
    }

}

module.exports = new childmancontroller;