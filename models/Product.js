const mongoose = require("mongoose");

// to create a schema in our db
// inside a object with template in curly breaces as another object tmeplate
const ProductSchema = new mongoose.Schema(
	{
		title: { type: String, required: true, unique: true },
		desc: { type: String, required: true },
		img: { type: String, required: true },
		categories: { type: Array },
		size: { type: Array },
		color: { type: Array },
		price: { type: Number, required: true },
		inStock: { type: Boolean, default: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
