import {Router} from 'express';

import { deleteBeeperController } from '../controllers/deleteController';

const deleteRouter = Router();

deleteRouter.delete('/:id', deleteBeeperController
);

export default deleteRouter;