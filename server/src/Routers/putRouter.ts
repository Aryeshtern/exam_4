import {Router} from 'express'
import {updateBeeper} from '../controllers/putControler'

const putRouter: Router = Router();

putRouter.put('/:id/status', updateBeeper); 

export default putRouter;
