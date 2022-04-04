import mongoose from "../db/connection.js";
import Pizza from "./Pizza.js";

const { Schema } = mongoose;

const Order = new Schema({
    items: [{
        item: {
            pizza: Pizza,
            amount: Number
        }
    }]
});

export default Order;