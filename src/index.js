const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers/resolvers");
const mongoose = require("mongoose");

//connect mongoose
mongoose.connect('mongodb://localhost:27017/graphql', { useNewUrlParser: true });

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers: resolvers,
});

server.start();