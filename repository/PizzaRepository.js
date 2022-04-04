import mongoose from "../db/connection.js";
import schema from "../schema/Pizza.js";

const model = mongoose.model('Pizza', schema)

const PizzaRepository = {
    list() {
        const query = {}
        return model.find(query)
    },
    byId(id) {
        return model.findOne({ _id: id })
    },
    create(data) {
        const pizza = new model(data)
        return pizza.save()
    },
    updateById(id, data) {
        return model.updateOne({ _id: id }, data)
    },
    deleteById(id) {
        return model.deleteOne({ _id: id })
    }
}

export default PizzaRepository;