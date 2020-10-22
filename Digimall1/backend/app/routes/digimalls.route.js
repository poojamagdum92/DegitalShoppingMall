
module.exports=(app)=>{
    const digimalls=require('../controllers/digimall.controller.js');

    // //create a new note
    app.post('/digimalls',digimalls.create);

    //retrive all notes
    app.get('/digimalls',digimalls.findAll);

   
}