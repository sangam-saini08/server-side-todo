const { constants } = require("../constants");
const errorHanlder = (err, req, res, next) => {
	const statusCode = res.status ? res.status : 500;
	switch (statusCode) {
		case constants.VALIDATION_ERROR:
			res.json({
				title: "validation error",
				message: err.message,
				stackTrace: err.stack,
			});
			break;
		case constants.UNAUTHORIZED: {
			res.json({
				title: "unauthorized",
				message: err.message,
				stackTrace: err.stack,
			});
			break;
		}
		case constants.NOT_FOUND: {
			res.json({
				title: "not found",
				message: err.message,
				stackTrace: err.stack,
			});
			break;
		}
		case constants.SERVER_ERROR: {
			res.json({
				title: "Server error",
				message: err.message,
				stackTrace: err.stack,
			});
			break;
		}
		default: {
			console.log("No Error : All Good!");
			break;
		}
	}
};

module.exports = errorHanlder;
