import 'dotenv/config';

import express, { Request, Response } from 'express';

const server = express();

const PORT = process.env.PORT || 3001;

server.get('/', (req: Request, res: Response) => {
  res.json({ message: 'haha!' });
});

const serverMessage = 'Sever is running on port ' + PORT;
server.listen(PORT, () => console.log(serverMessage));
