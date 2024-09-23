export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER',
  }
  
  export interface Entry {
      id: string;
      description: string;
      date: string;
      specialist: string;
      diagnosisCodes?: string[];
    }

  
  export interface Patient {
    id: string;
    name: string;
    ssn: string;
    occupation: string;
    gender: Gender;
    dateOfBirth: string;
    entries: Entry[]; 
  }
  
  export type NonSensitivePatient = Omit<Patient, 'ssn' | 'entries'>;
  