import express from 'express';
import cors from 'cors';
import {
  bookController,
  loginController,
  registrationController,
  searchController,
} from '../controllers';
import authenticateToken from '../middlewares/authenticate-token';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.post('/registration', registrationController.post);
router.post('/login', loginController.post);

router.use(authenticateToken);
router.get('/search', searchController.get);
router.get('/books', bookController.get);
router.post('/books', bookController.post);

export default router;
