import express from 'express';
import { deleteUser, getUseresForTable } from '../controllers/user.js';

const router = express.Router();

router.get('/getUsers',getUseresForTable);
router.delete('/deleteUser/:username',deleteUser);

export default router;  