const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL, { dbName: "Artrivate" })
	.then(() => console.log("DB connection successful"))
	.catch((err) => {
		console.log("error");
	});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log("backend");
});
