const product = require('../models/product')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class mancontroller{
    // Get /news
    index(req,res,next){
        product.find({})
        .then(product => {
            res.render('man',{
                product: mutipleMongooseToObject(product)
            })}
        )}
    // Get /search
    search(req,res){
        res.send('Không thể tìm kiếm')
    }

}

module.exports = new mancontroller;