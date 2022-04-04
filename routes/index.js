import { Router } from "express";
import PizzaRouter from "./PizzaRoutes.js";

const routes = new Router();

routes.use('/pizza', PizzaRouter);

export default routes;