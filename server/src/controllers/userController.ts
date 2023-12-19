import { Response, Request } from "express";
import User from "../models/User";

const userController = {
  getUsers: async (req: Request, res: Response) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },

  getUserById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ Message: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },

  createUser: async (req: Request, res: Response) => {
    const {
      email,
      password,
      username,
      phoneNumber,
      firstname,
      lastname,
      dateOfBirth,
      address,
    } = req.body;

    try {
      const newUser = new User({
        email,
        password,
        username,
        firstname,
        phoneNumber,
        lastname,
        dateOfBirth,
        address,
      });

      await newUser.save();
      res.status(200).json({ Message: "Insert Success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },

  updateUser: async (req: Request, res: Response) => {
    const { _id } = req.body;

    try {
      const user = await User.findOneAndUpdate({ _id }, { $set: req.body });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.status(200).json({ message: "Updated Successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const result = await User.deleteOne({ _id: id });

      if (result.deletedCount === 0) {
        return res.status(404).json({ Message: "User not found" });
      }

      return res.status(200).json({ Message: "Deleted Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },
};

export default userController;
