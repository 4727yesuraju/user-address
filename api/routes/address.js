import express from 'express';
import { deleteAddress, getAddressForUser } from '../controllers/address.js';

const router = express.Router();

router.get('/getAddress/:username',getAddressForUser);
router.delete('/deleteAddress/:id',deleteAddress);

export default router;  