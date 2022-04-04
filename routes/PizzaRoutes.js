import controller from '../controller/PizzaController.js'
import { Router } from 'express';

const router = new Router();

router.get('/', controller.list);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.updateById);
router.put('/:id', controller.deleteById);