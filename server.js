const express = require("express");
const errorHanlder = require("./middlewares/errorHandler");
const dotenv = require("dotenv");
const connectDb = require("./config/dbConnection");
const cors = require("cors");

dotenv.config();
connectDb();
const app = express();

const port = process.env.PORT || 4000;

const coreOptions = {
	origin: "http://localhost:5173",
	methods: "GET,PUT,POST,DELETE",
	credentials: true,
};

app.use(express.json());
app.use(cors(coreOptions));
app.use("/api/todos", require("./routes/todoRoutes"));
app.use(errorHanlder);

app.listen(port, () => {
	console.log("listening on prot " + port);
});

//Iv1UrllZTPBssNXc
