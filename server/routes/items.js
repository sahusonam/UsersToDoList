import express from 'express';
import { getItemsList } from '../controllers/items.js';

const router = express.Router();

router.get('/',getItemsList);

export default router;