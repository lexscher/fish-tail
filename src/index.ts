import 'dotenv/config';
import cors from 'cors';
import express, { Request, Response } from 'express';

const server = express();
server.use(cors());

const port = process.env.PORT || 3001;

server.get('/', (req: Request, res: Response) =>
  res.json({ message: 'haha!' })
);

const serverMessage = 'Sever is running on port ' + port;
server.listen(port, () => console.log(serverMessage));
