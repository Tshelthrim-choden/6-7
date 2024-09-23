import { z } from 'zod';
import { Gender } from '../types/ patient';

export const PatientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format. Use YYYY-MM-DD'),
  ssn: z.string().min(1, 'SSN is required'),
  gender: z.enum([Gender.MALE, Gender.FEMALE, Gender.OTHER]),
  occupation: z.string().min(1, 'Occupation is required'),
});

export type PatientInput = z.infer<typeof PatientSchema>;
