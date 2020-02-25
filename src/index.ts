import 'dotenv/config';
import cors from 'cors';
import express, { Request, Response } from 'express';
import db from './database/db';

const server = express();

// middleware
server.use(cors());

// database connection
db.on('error', (err) => console.error(err));
db.once('open', () => console.log('connected to MongoDB Database'));

const port = process.env.PORT || 3001;

server.get('/', (req: Request, res: Response) =>
  res.json({ message: 'haha!' })
);

const serverMessage = 'Sever is running on port ' + port;
server.listen(port, () => console.log(serverMessage));
