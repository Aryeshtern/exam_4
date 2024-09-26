import {Router} from 'express';

import {postBeeper} from '../controllers/postcontroller';

const router:Router = Router();

router.post('', postBeeper);

