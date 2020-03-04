/*
 *
 *   NOTES:
 *   > Might not use this model
 *   - For the "Tracked Item" join table,
 * we can just use the id from the fortnite
 * api **Once they're back up and running.
 *
 *  > IF WE DO
 *   - It will be to save an item only when a
 * user wants to track it.
 *   - then if another user wants to track an item we've
 * saved, we'll look search our database before searching
 * the fortnite api
 *
 */

import { Router, Request, Response } from 'express';
import Item from '../../models/item';
// use router
const router = Router();

// GET [All] route
router.get('/', async (req: Request, res: Response) => {
  try {
    // grab all the items in our database
    const items = await Item.find({});
    // send items to client
    res.send(items);
  } catch (error) {
    // form message
    const errMessage = 'ERROR: ' + error;
    // make console warning
    console.warn(errMessage);
    // send error message
    res.send(errMessage);
  }
});

// GET [One] route
router.get('/:id', async (req: Request, res: Response) => {
  try {
    // grab id from params
    const { id } = await req.params;
    // find item using it's id
    const item = await Item.findById(id);
    // send item to client
    res.send(item);
  } catch (error) {
    // form message
    const errMessage = 'ERROR: ' + error;
    // make console warning
    console.warn(errMessage);
    // send error message
    res.send(errMessage);
  }
});

// CREATE
router.post('/', async (req: Request, res: Response) => {
  try {
    // create new item
    const item = await Item.create(req.body);
    // send item to client
    res.send(item);
  } catch (error) {
    // form message
    const errMessage = 'ERROR: ' + error;
    // make console warning
    console.warn(errMessage);
    // send error message
    res.send(errMessage);
  }
});

// UPDATE => Necessary when Fortnite updates the item
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    // get info from client
    const {
      params: { id },
      body,
    } = req;
    // find item
    const item = await Item.findById(id);
    // update item
    if (item) item.update(body);
    // send updated item to client
    res.send(item);
  } catch (error) {
    // form message
    const errMessage = 'ERROR: ' + error;
    // make console warning
    console.warn(errMessage);
    // send error message
    res.send(errMessage);
  }
});

// DELETE
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    // grab id from params
    const { id } = await req.params;
    // find item
    const item = Item.findByIdAndDelete(id);
    // send item to user
    const msg = 'Successfully deleted: ' + item;
    res.send(msg);
  } catch (error) {
    // form message
    const errMessage = 'ERROR: ' + error;
    // make console warning
    console.warn(errMessage);
    // send error message
    res.send(errMessage);
  }
});

// export the router
export default router;
