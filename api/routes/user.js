import express from 'express';
import { getUseresForTable } from '../controllers/user.js';

const router = express.Router();

router.get('/getUsers',getUseresForTable);

export default router;  