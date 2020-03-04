// import tools from express
import { Router, Request, Response } from 'express';
// import FavoritedItem model
import FavoritedItem from '../../models/favoritedItem';
// use express router
const router = Router();

// create favorited item
router.post('/', async (req: Request, res: Response) => {
  try {
    // grab the items from the request
    const favItem = await FavoritedItem.create(req.body);
    // send that newly created favorited item
    res.send(favItem);
  } catch (err) {
    // handle error messages
    const errMsg = 'ERRoR: ' + err;
    console.warn(errMsg);
    res.send(errMsg);
  }
});

// edit favorited item
router.patch('/:id', async (req: Request, res: Response) => {
  try {
    // grab the items we need from the request
    const {
      params: { id },
      body,
    } = req;
    // find the favorited item using the id
    const favItem = await FavoritedItem.findById(id);
    // update the favorited item
    favItem?.update(body);
    // send that udpdated favorited item to client
    res.send(favItem);
  } catch (err) {
    const errMsg = 'ERRoR: ' + err;
    console.warn(errMsg);
    res.send(errMsg);
  }
});

// delete favorited item
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    // find and delete the favorited item using params
    const favItem = await FavoritedItem.findByIdAndDelete(req.params.id);
    // send response to client
    const msg = 'Successfully deleted: ' + favItem;
    res.send(msg);
  } catch (err) {
    const errMsg = 'ERRoR: ' + err;
    console.warn(errMsg);
    res.send(errMsg);
  }
});

// export router
export default router;
