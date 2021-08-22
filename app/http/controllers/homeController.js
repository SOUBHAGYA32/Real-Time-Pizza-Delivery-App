const Menu = require('../../models/menu')
function homeController() {
   //Factory Function
   return {
      async index(req,res){
           const pizzas = await Menu.find()
           res.render('pages/home', {pizzas:pizzas})
       }
   }
}
module.exports = homeController