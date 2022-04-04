import { Router } from "express";
import PizzaRouter from "./PizzaRoutes.js";
import OrderRouter from "./OrderRoutes.js";

const routes = new Router();

routes.use('/pizza', PizzaRouter);
routes.use('/order', OrderRouter);

export default routes;