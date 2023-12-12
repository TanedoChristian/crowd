import { Response, Request } from "express";
import User from "../models/User";

const accountController = {
  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user: any = User.findOne({ email });

    if (user) {
      res.status(200).json({ message: "Ok" });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  },
};

export default accountController;
