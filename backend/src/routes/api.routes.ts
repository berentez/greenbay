import express from 'express';
import cors from 'cors';

import { bookController, registrationController } from '../controllers';
import { loginController } from '../controllers/login-controller';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/registration', registrationController.post);
router.post('/login', loginController.post);

router.get('/books', bookController.get);
router.post('/books', bookController.post);

export default router;
