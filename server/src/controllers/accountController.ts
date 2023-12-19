import { Response, Request } from "express";
import User from "../models/User";

const accountController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    console.log(email);
    console.log(password);
    try {
      const user = await User.findOne({ email });

      if (user && user.password == password) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "Not Found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default accountController;
