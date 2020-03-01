import 'dotenv/config';
import cors from 'cors';
import express, { Request, Response, json, urlencoded } from 'express';
import db from './database/db';
import routes from './routes/';

const server = express();

const port = process.env.PORT || 3001;

// MIDDLE WARE
server.use(cors());
server.use(json());
server.use(urlencoded({ extended: true }));

// START DB CONNECTION
db.on('error', err => console.error(err));
db.once('open', () => console.log('connected to MongoDB Database'));

server.get('/', (req: Request, res: Response) =>
  res.json({ message: 'haha!' })
);

// ROUTES
const { user } = routes;
server.use('/api/v1/users', user);

// RUN SERVER
const serverMessage = 'Sever is running on port ' + port;
server.listen(port, () => console.log(serverMessage));
