import express from 'express';
import diagnosisData from '../data/diagnoses';
import { Diagnosis } from '../types/diagnosis';

const router = express.Router();


router.get('/', (_req, res) => {
  const diagnoses: Diagnosis[] = diagnosisData;
  res.json(diagnoses);
});


export default router;
