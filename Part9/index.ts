import express from 'express';

const app = express();

app.get('/ping', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('pong');
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});