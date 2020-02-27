const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server = require("./queries/queries.js");

let databaseURL = process.env.DATABASE_URL || "mongodb+srv://username:password1234@cluster-b42oy.mongodb.net/tic-tac-toe?retryWrites=true&w=majority";

mongoose.Promise = global.Promise

mongoose.connect(databaseURL, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open", ()=>{
	console.log("now connected to the online mongodb 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
})
//make the express app be served by ApolloServer
server.applyMiddleware({app, path:"/graphql"});

let port = process.env.PORT || 4000;
app.listen(port, ()=>{
	console.log(`Server ready at port${port}${server.graphqlPath}`);
})
