import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';

export default (req: Request, res: Response, next: NextFunction) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(422)
      .json({ message: 'Invalid mongo id' });
  }
  next();
};
