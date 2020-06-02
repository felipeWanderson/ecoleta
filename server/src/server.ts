import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(process.env.PORT, () => {
  console.log(`Serividor rodando na porta::${process.env.PORT}`);
});
