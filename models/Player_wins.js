const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Player_winsSchema = new Schema(
	{
		players: { type: String, required: true },
		wins: { type: Number, required: true}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("Player_wins", Player_winsSchema);
