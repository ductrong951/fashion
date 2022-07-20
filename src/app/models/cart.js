const mongoose = require('mongoose')
const Schema = mongoose.Schema
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


module.exports = function Cart(oldcart){
    this.items = oldcart.items;
    this.totalQty = oldcart.totalQty;
    this.totalPrice = oldcart.totalPrice;

    this.add = function (item, id){
        var storedItem = this.items[id]

        // No item on cart
        if(!storedItem){
            storedItem = this.items[id] = { item: item, qty:0, price: 0 }
        }
        storedItem.qty++
        storedItem.price = storedItem.item.price * storedItem.qty
        this.totalQty++
        this.totalPrice += storedItem.price
        
        this.generateArray = function(){
            var arr =[]
            for( var id in this.items){
                arr.push(this.items[id])
            }
            return(arr)
        }
    }
}


