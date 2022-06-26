const express = require("express");
const { findById } = require("./models/data");
const data = require("./models/data");

const router = express.Router();

const homepage = async (req, res) => {
	try {
		const result = await data.find();
		//console.log(result);
		res.status(200).render("homepage", { result });
	} catch (err) {
		console.log(err);
	}
};
const formdata = (req, res) => {
	const result = { name: "", age: "", course: "", email: "" };
	res.status(200).render("form", { title: "Creating", result });
};

const createdata = async (req, res) => {
	try {
		const result = await data.create(req.body);
		//console.log(result);
		res.redirect("/");
	} catch (err) {
		console.log(err)
	}
};
const updateform = async (req, res) => {
	try {
		const result = await data.findById(req.params.id);
		res.render("form", { title: "Editing", result });
	} catch (err) {
		console.log(err);
	}
};
const updatedata = async (req, res) => {
	try {
		await data.findByIdAndUpdate(req.params.id, req.body);
		res.redirect("/");
	} catch (err) {
		console.log(err.message);
	}
};
const deleteform = async (req, res) => {
	try {
		await data.findByIdAndDelete(req.params.id);
		res.redirect("/");
	} catch (err) {
		console.log(err);
	}
};
router.get("/", homepage);
router.get("/form", formdata);
router.post("/form", createdata);
router.get("/deleteform/:id", deleteform);
router.post("/updateform/:id", updatedata);
router.get("/updateform/:id", updateform);

module.exports = router;
