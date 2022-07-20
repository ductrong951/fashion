const mongoose = require('mongoose')
const Schema =mongoose.Schema
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const main = new Schema ({
    select: { type: Number},
    name: {type: String, maxLength: 255},
    description: { type: String, maxLength: 10000},
    price: { type: String, maxLength: 255},
    image:{type: String},
    slug: { type: String, "slug": ['name', ' ' ,'select'], unique:'true' }
})


module.exports = mongoose.model('main', main)


