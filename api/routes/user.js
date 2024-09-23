import express from 'express';
import { getUseresForTable } from '../controllers/user.js';

const router = express.Router();

router.post('/getUsers',getUseresForTable);

export default router;  