const mongoose = require("mongoose");

const connectDb = async () => {
	try {
		const connect = await mongoose.connect(
			"mongodb://127.0.0.1:27017/todo-list"
		);
		console.log(
			"database connection established",
			connect.connection.host,
			connect.connection.name
		);
	} catch (error) {
		console.log("error", error);
		process.exit(1);
	}
};

module.exports = connectDb;
