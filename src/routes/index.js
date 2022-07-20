const Sitecontroller = require('./sites')
const womancontroller = require('./woman')
const mancontroller = require('./man')
const childmancontroller = require ('./child-man')
const childwomancontroller = require ('./child-woman')
const productcontroller = require('./product')

function route(app){
    app.use('/', Sitecontroller)
    app.use('/index', Sitecontroller)
    app.use('/woman', womancontroller)
    app.use('/man', mancontroller)
    app.use('/child-man', childmancontroller)
    app.use('/child-woman', childwomancontroller)
    app.use('/product', productcontroller)
}

module.exports = route;