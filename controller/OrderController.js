import repository from "../repository/OrderRepository.js";

const OrderController = {
    list(req, res) {
        repository.list()
            .then(result => res.json(result))
            .catch(e => console.log(e))
    },
    getById(req, res) {
        repository.byId(req.params.id)
            .then(result => {
                if (!result) {
                    res.sendStatus(404)
                }
                res.json(result)
            })
            .catch(e => console.log(e))
    },
    create(req, res) {
        repository.create(req.body)
            .then(result => res.status(201).json(result))
            .catch(e => console.log(e))
    },
    updateById(req, res) {
        repository.updateById(req.params.id, req.body)
            .then(result => res.json(result))
            .catch(e => console.log(e))
    },
    deleteById(req, res) {
        repository.deleteById(req.params.id)
            .then(_ => res.sendStatus(204))
            .catch(e => console.log(e))
    }
};

export default OrderController;