import express from 'express';
import cors from 'cors';
import continentRouter from './routes/continent.route.js';
import cityRouter from './routes/city.route.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', continentRouter);
app.use('/continent', cityRouter);

app.listen(4000, () => console.log('API has started'));
