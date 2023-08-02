const connectToDatabase = require("../config/mongoconfig");
const { generateToken } = require("../utilities/authorization.utilities");
const {
  encryptPassword,
  deCryptPassword
} = require("../utilities/password.utilities");
const updateDoc = require("../utilities/update.utilities");
const existingUser = async (req, res, next) => {
  var db = await connectToDatabase();
  var usersCollection = await db.collection("Users");
  const result = await usersCollection.findOne({
    email: req.body.email
  });
  if (result) {
    res.status(409).json({ success: false, message: "Existing User" });
  } else {
    next();
  }
};

const register = async (req, res, next) => {
  var mailValue = req.body.email.toLowerCase();
  var hashed = await encryptPassword(req.body.pswd);
  var info = {
    name: req.body.name,
    email: mailValue,
    pswd: hashed,
    category: req.body.category,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    profilePicUrl: req.body.profilePicUrl
  };
  try {
    var db = await connectToDatabase();
    var usersCollection = await db.collection("Users");
    usersCollection.insertOne(info);
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(503).json({ success: false, message: error });
  }
};

const login = async (req, res, next) => {
  var { email, pswd } = req.body;
  var db = await connectToDatabase();
  var usersCollection = await db.collection("Users");
  const result = await usersCollection.findOne({ email: email.toLowerCase() });
  if (result) {
    try {
      const decrypted = await deCryptPassword(pswd, result.pswd);
      if (result.email === email && decrypted.success === true) {
        const { token, message, success } = await generateToken(
          result._id,
          result.name,
          result.email,
          result.category
        );
        success
          ? res.status(200).json({ token, message })
          : res.status(503).json({ message, error: true });
      } else {
        res.status(404).json({ message: "non-existing account" });
      }
    } catch (error) {
      console.log(error.message);
    }
  } else {
    res.status(404).json({ message: "non-existing account" });
  }
};
const photoupload = async (req, res) => {
  var { image, email } = req.body;
  const filter = { email: email };
  const update = { profilePicUrl: image };
  const result = await updateDoc("Users", filter, update);
  result.success
    ? res.json({ success: true })
    : res.json({ success: false, message: "User doesn't exist" });
};
module.exports = {
  existingUser,
  register,
  login,
  photoupload
};
