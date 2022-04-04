import controller from '../controller/OrderController.js'
import { Router } from 'express';

const orderRouter = new Router();

orderRouter.get('/', controller.list);
orderRouter.get('/:id', controller.getById);
orderRouter.post('/', controller.create);
orderRouter.put('/:id', controller.updateById);
orderRouter.put('/:id', controller.deleteById);

export default orderRouter;