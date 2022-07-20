const product = require('../models/product')
const cart = require('../models/cart')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class Sitecontroller{
    // Get /news
    index(req,res,next){
        product.find({})
        .then(product => {
            res.render('home',{
                product: mutipleMongooseToObject(product)
            })}
        )}
    // Get /search
    search(req,res){
        res.send('Không thể tìm kiếm')
    }
}

module.exports = new Sitecontroller;