import express from 'express';
import { getAddressForUser } from '../controllers/address.js';

const router = express.Router();

router.post('/getAddress/:username',getAddressForUser);

export default router;  