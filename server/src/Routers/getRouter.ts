import {Router, Request, Response} from "express";
import {getBeepersList} from "../controllers/getConteroller"

const getRouter:Router = Router();

getRouter.get('', getBeepersList );



export default getRouter

