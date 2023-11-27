const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
	{
		todoTitle: {
			type: String,
			required: true,
		},
		isCompleted: {
			type: Boolean,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Todo", todoSchema);
