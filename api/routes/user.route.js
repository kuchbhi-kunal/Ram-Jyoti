import express from 'express';

import { user, getAllUsers } from '../controllers/user.controller.js';

const router = express.Router();


router.post('/', user);

router.get('/all', getAllUsers);

export default router;