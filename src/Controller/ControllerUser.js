const mongoose = require("mongoose");
const { create } = require("../model/User");

const User = mongoose.model("User");

module.exports = {
    users(){
        return User.find();
    },
    user(id){
        return User.findById(id);
    },
    create(name,email){
        return User.create({name, email});
    },
};