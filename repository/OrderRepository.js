import mongoose from "../db/connection.js";
import schema from "../schema/Order.js";

const model = mongoose.model('Order', schema);

const OrderRepository = {
    list() {
        const query = {}
        return model.find(query)
    },
    byId(id) {
        return model.findOne({ _id: id })
    },
    create(data) {
        const order = new model(data)
        return order.save()
    },
    updateById(id, data) {
        return model.updateOne({ _id: id }, data)
    },
    deleteById(id) {
        return model.deleteOne({ _id: id })
    }
};

export default OrderRepository;