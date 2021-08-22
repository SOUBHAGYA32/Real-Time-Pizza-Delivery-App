function homeController() {
   //Factory Function
   return {
       index(req,res){
        res.render('pages/home')
       }
   }
}
module.exports = homeController