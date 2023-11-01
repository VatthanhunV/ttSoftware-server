const User = require("../model/users.js");

exports.createUser = async (req, res) => {
  try {
    // if (
    //   !req.body.name &&
    //   !req.body.lastname &&
    //   !req.body.telephone &&
    //   !req.body.email
    // ) {
    //   return console.log("not all!");
    // } else {
    console.log(req.body);
    const newUser = await new User(req.body).save();
    res.json(newUser);
    // }
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Create not response");
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find({}).exec();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server List not response");
  }
};

exports.readUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id }).exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Read not response");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req.body.lastname);
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        lastname: req.body.lastname,
        telephone: req.body.telephone,
        email: req.body.email,
      }
    );
    res.send(user);
  } catch (err) {
    res.status(500).send("Server Update not response", req.body);
  }
};

exports.removeUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndDelete({ _id: id }).exec();
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Delete not response");
  }
};
