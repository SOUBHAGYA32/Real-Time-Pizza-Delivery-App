const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')


//Middleware
const otherUser = require('../app/http/middleware/otherUser')
function initRoutes(app){
    app.get('/', homeController().index)

    //Auth
    app.get('/login',otherUser, authController().login)
    app.post('/login', authController().postLogin)

    app.get('/signup',otherUser,authController().signup)
    app.post('/signup', authController().postSignup)
    app.post('/logout', authController().logout)

    //Customers
    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
   
}

module.exports = initRoutes