import express from 'express';
import { addNewItem, getItemsList } from '../controllers/items.js';

const router = express.Router();

router.get('/',getItemsList);

router.post('/',addNewItem);

export default router;