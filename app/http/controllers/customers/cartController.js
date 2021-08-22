function cartController() {
    //Factory Function
    return {
        cart(req,res){
            res.render('customers/cart')
        }
    }
 }
 module.exports = cartController