import { Response, Request } from "express";
import User from "../models/User";

const userController = {
  getUsers: async (req: Request, res: Response) => {
    const users = await User.find();
    res.status(200).json(users);
  },
  createUser: async (req: Request, res: Response) => {
    const {
      userId,
      email,
      password,
      username,
      firstname,
      lastname,
      dateOfBirth,
      address,
    } = req.body;

    const newUser = new User({
      userId,
      email,
      password,
      username,
      firstname,
      lastname,
      dateOfBirth,
      address,
    });

    await newUser
      .save()
      .then(() => {
        res.status(200).json({ Message: "Insert Success" });
      })
      .catch((err: any) => res.status(404).json({ Message: err }));
  },

  updateUser: async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await User.findOneAndUpdate(
      { userId: id },
      { $set: req.body }
    );

    if (!user) {
      res.status(404).json({ Message: `User ${id} not found` });
    }

    res.status(200).json({ Message: `Updated Successfully` });
  },

  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.params;

    await User.deleteOne({ userId: id })
      .then(() => res.status(200).json({ Message: "Deleted Successfully" }))
      .catch((err: any) => res.status(404).json({ Message: err }));
  },
};

export default userController;
