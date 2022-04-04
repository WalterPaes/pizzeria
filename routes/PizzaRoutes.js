import controller from '../controller/PizzaController.js'
import { Router } from 'express';

const pizzaRouter = new Router();

pizzaRouter.get('/', controller.list);
pizzaRouter.get('/:id', controller.getById);
pizzaRouter.post('/', controller.create);
pizzaRouter.put('/:id', controller.updateById);
pizzaRouter.put('/:id', controller.deleteById);

export default pizzaRouter;