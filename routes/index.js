import { Router } from "express";
import PizzaRouter from "./PizzaRoutes.js";

const router = new Router();

router.use(PizzaRouter);

export default router;