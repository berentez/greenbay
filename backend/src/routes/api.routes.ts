import express from 'express';
import cors from 'cors';

import { registrationController } from '../controllers';
import { loginController } from '../controllers/login-controller';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/registration', registrationController.post);
router.post('/login', loginController.post);

export default router;
