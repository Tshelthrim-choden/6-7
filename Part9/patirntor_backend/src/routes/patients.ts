import express, { Request, Response } from 'express';
import { v1 as uuid } from 'uuid';
import { Patient } from '../types/ patient';
import { getPatients, addPatient } from '../data/patients';
import { PatientSchema } from '../api/patients';

const router = express.Router();


router.get('/', (_req, res) => {
  const patientData = getPatients().map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));

  res.json(patientData);
});


router.get('/:id', (req: Request<{ id: string }>, res: Response) => {
  const patientId = req.params.id;
  const patient = getPatients().find(p => p.id === patientId);

  if (patient) {
    return res.json(patient);
  } else {
    return res.status(404).json({ error: 'Patient not found' });
  }
});



router.post('/', (req, res) => {
  const parseResult = PatientSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      error: 'Invalid input',
      issues: parseResult.error.errors,
    });
  }

  const { name, dateOfBirth, ssn, gender, occupation } = parseResult.data;

  const newPatient: Patient = {
    id: uuid(),
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation,
    entries: []
  };

  addPatient(newPatient);
  return res.status(201).json(newPatient);
});

export default router;