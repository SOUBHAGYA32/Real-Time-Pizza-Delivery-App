function authController() {
    //Factory Function
    return {
        login(req,res){
            res.render('auth/login')
        },
        signup(req,res){
            res.render('auth/signup')
        }
    }
 }
 module.exports = authController