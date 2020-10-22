const mongoose=require('mongoose');

const DigimallSchema=mongoose.Schema({
   
   productName:String,
   price:Number,
   description:String
  
    
},{
    timestamps:true
});
module.exports=mongoose.model('Digimall',DigimallSchema);