const { ApolloServer, gql } = require("apollo-server-express");

const Player = require("../models/Player_wins.js");

const typeDefs = gql`
	type PlayerType {
		id: ID
		players: String
		wins: Int
	}
	#End of Query Types

	#Start of Query
	type Query {
		getPlayers: [PlayerType]
	}
	#End of Query

	type Mutation {
		#Start of Update Mutation Type
		updatePlayer(
			id: ID!
			player: String
			wins: Int
		): PlayerType
		# End of Update Mutation Type
	}
`;



const resolvers = {
	//Start of Query
	Query: {
		getPlayers: (_, args) => {
			return Player.find({});
		}
	},
	//End of Query

	
	Mutation: {
		//Start of Update Mutation
		updatePlayer: (_, args) => {
			return Player.findOneAndUpdate({ _id: args.id }, {$set: {wins: args.wins}},
    {
        returnNewDocument: true
    });
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

module.exports = server;
