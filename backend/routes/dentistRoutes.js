import express from 'express';
import { getDentistInfo } from '../controllers/dentistController.js'

const router = express.Router();

router.route('/').get(getDentistInfo)

export default router;