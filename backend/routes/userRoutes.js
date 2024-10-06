import express from 'express';
import { deleteUser, getUser, login, logout, register, updateUser } from '../controllers/userController.js';
import auth from '../middleware/authMiddleware.js';
const router=express.Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', auth(), logout);
router.get('/get-user', auth(), getUser);
router.patch('/update-user', auth, updateUser);
router.delete('/delete-user', auth, deleteUser);

export default router;