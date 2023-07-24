const connectToDatabase = require("../config/mongoconfig");
const existingUser = async (req, res, next) => {
  var db = await connectToDatabase();
  var usersCollection = await db.collection("Users");
  const existingmails = await usersCollection
    .find({}, { projection: { _id: 0, email: 1 } })
    .toArray();
  if (existingmails.find((obj) => obj.email === req.body.email) !== undefined) {
    console.log("Existing User");
    res.status(409).json({ message: "Existing User" });
  } else {
    next();
  }
};

const register = async (req, res, next) => {
  var info = {
    username: req.body.username,
    email: req.body.email,
    pswd: req.body.pswd,
    category: req.body.category,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    profilePicUrl: req.body.profilePicUrl
  };
  var db = await connectToDatabase();
  var usersCollection = await db.collection("Users");
  usersCollection.insertOne(info);
  res.status(200).json({ status: "success" });
};

const login = async (req, res, next) => {
  var info = {
    email: req.body.email,
    pswd: req.body.pswd
  };
  var db = await connectToDatabase();
  var usersCollection = await db.collection("Users");
  const accounts = await usersCollection
    .find({}, { projection: { _id: 0, email: 1, pswd: 1 } })
    .toArray();
  if (
    accounts.find(
      (obj) => obj.email === info.email && obj.pswd === info.pswd
    ) !== undefined
  ) {
    res.status(200).json({ message: "success"});
  }else{
    res.status(404).json({message:"failed"})
  }
};

module.exports = {
  existingUser,
  register,
  login
};
