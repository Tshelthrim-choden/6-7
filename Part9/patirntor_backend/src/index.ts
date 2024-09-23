import express from 'express';
import cors from 'cors';
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients'; 
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
