const controllerUser = require("../Controller/ControllerUser");

module.exports = {
    Query: {
        getAllUsers: controllerUser.users,
        getOneUser: (_, { id }) => controllerUser.user(id),
    },

    Mutation: {
        createUser: (_, { name, email }) => controllerUser.create(name,email), 
    },
};