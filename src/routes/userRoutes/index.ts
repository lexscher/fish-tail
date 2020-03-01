import { Router, Request, Response } from 'express';
import userModel from '../../models/user';

const router = Router();

// GET all users
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await userModel.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET ONE USER
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id);
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// CREATE a user
router.post('/', async (req: Request, res: Response) => {
  try {
    const user = new userModel(req.body);
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE (EDIT user info)
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const user = await userModel.findById(id);
    if (user) user.update(body);
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a user
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    if (!user) res.status(404).send('Not Found');
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
