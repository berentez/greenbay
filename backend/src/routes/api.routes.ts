import express from 'express';
import cors from 'cors';

import { registrationController } from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/registration', registrationController.post);

export default router;
