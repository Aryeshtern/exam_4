import {Router} from "express";
import {getBeepersList, getBeeper, getBeeperByStatus} from "../controllers/getConteroller"

const getRouter:Router = Router();

getRouter.get('', getBeepersList);

getRouter.get('/:id', getBeeper);

getRouter.get('/status/:status', getBeeperByStatus)





export default getRouter

