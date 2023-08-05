const connectToDatabase = require("../config/mongoconfig")

const updateDoc = async (collectionName,filter,update)=>{
    try{
const db = await connectToDatabase()
const collection = await db.collection(collectionName)
const result = await collection.updateOne(filter,{$set:update})
return result.matchedCount === 1
  ? { success: true }
  : { success: false,message:"Unable to Update"};
}catch(err){
    console.log("Error in updating document", err);
}
}

module.exports = updateDoc