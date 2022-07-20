const product = require('../models/product')
const cart = require('../models/cart')
const { mongooseToObject } = require('../../util/mongoose')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class productcontroller{
    // Get // DETAIL-PRODUCT
    detail(req,res,next){
        product.findOne({ slug: req.params.slug  })
         .then((product) => {
            res.render('product/detailproduct', { product: mongooseToObject(product)})})
        .catch(next)
        }
    
        // Get // CREATE PRODUCT
    create(req,res,next){
        res.render('product/createproduct')
    }

    // POST // STORED PRODUCT
    stored(req,res,next){
        product(req.body).save()
            .then (() => res.redirect('/product'))
            .catch(error =>{})
    }

    list(req,res,next){
        product.find({})
        .then(product => {
           res.render('product/listproduct',{
                product: mutipleMongooseToObject(product)
            })})
        .catch(next)  
    }
    
    edit(req,res,next){
        product.findById( req.params.id )
        .then(product => {
           res.render('product/updateproduct',{
               product: mongooseToObject(product)
            })})
        .catch(next)   
    }

    // PUT /product/_id
    update(req,res,next){
        product.updateOne({ _id:req.params.id }, req.body)
        .then(() => res.redirect('/product'))
        .catch(next)
    }

    // DELETE /PRODUCT/id
    delete(req,res,next){
        product.deleteOne({ _id:req.params.id })
        .then(() => res.redirect('/product'))
        .catch(next)
    }
}

module.exports = new productcontroller;