const mongoose = require("mongoose");

const priceSchema = mongoose.Schema(
  {
    first_buy: {
      type: String,
      required: true,
    },
    previous_pattern: {
      type: Number,
      required: true,
    },
    buy_price: {
        type: Number,
        required: true,
    },
    mon_AM: {
        type: Number
    },
    mon_PM: {
        type: Number
    },
    tues_AM: {
        type: Number
    },
    tues_PM: {
        type: Number
    },
    weds_AM: {
        type: Number
    },
    weds_PM: {
        type: Number
    },
    thurs_AM: {
        type: Number
    },
    thurs_PM: {
        type: Number
    },
    fri_AM: {
        type: Number
    },
    fri_PM: {
        type: Number
    },
    sat_AM: {
        type: Number
    },
    sat_PM: {
        type: Number
    },
  },
  {
    timestamps: true,
  }
);

const Price = mongoose.model("Price", priceSchema);

module.exports = Price;
