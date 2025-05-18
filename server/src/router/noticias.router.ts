import Express, {Request, Response} from "express";


import MostrarTodasNoticias from "../controllers/noticias.controller";

const router = Express.Router()

router.get('/MostrarTodasNoticias', MostrarTodasNoticias)

export default router;


