const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

const DB = process.env.DATABASE;
mongoose
	.connect(DB, {
		useNewUrlParser: true,
		useUnifiedTopology:true
	})
	.then(() => app.listen(PORT, () => console.log(`listening at port ${PORT}`))).catch(err=>console.log(err.message));
