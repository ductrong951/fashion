const product = require('../models/product')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class childwomancontroller{
    // Get /news
    index(req,res,next){
        product.find({})
        .then(product => {
            res.render('child-woman',{
                product: mutipleMongooseToObject(product)
            })}
        )}
    // Get /search
    search(req,res){
        res.send('Không thể tìm kiếm')
    }

}

module.exports = new childwomancontroller;