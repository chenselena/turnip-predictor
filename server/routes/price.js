const express = require("express");
const Price = require("../models/price");
const Router = express.Router();

Router.get("/prices", async (req, res) => {
    try {
        const prices = await Price.find({});
        res.send(prices);
    } catch (error) {
        res
        .status(400)
        .json("Error while getting prices. Try again later.");
    }
});

Router.post("/prices", async (req, res) => {
    try {
        const { first_buy, previous_pattern, buy_price } = req.body;
        const price = new Price({
            first_buy,
            previous_pattern,
            buy_price,
            mon_AM: req.body.mon_AM,
            mon_PM: req.body.mon_PM,
            tues_AM: req.body.tues_AM,
            tues_PM: req.body.tues_PM,
            weds_AM: req.body.weds_AM,
            weds_PM: req.body.weds_PM,
            thurs_AM: req.body.thurs_AM,
            thurs_PM: req.body.thurs_PM,
            fri_AM: req.body.fri_AM,
            fri_PM: req.body.fri_PM,
            sat_AM: req.body.sat_AM,
            sat_PM: req.body.sat_PM,
        });
        await price.save();
        res.json({message:"successful", price});
    } catch (error) {
        res.status(400).json("Error while adding price. Try again later.");
    }
}, (error, req, res, next) => {
    if (error) {
    res.status(500).send(error.message);
    }
});

module.exports = Router;