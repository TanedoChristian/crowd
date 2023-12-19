import { Request, Response } from "express";
import Contact from "../models/Cotact";

export const contactController = {
  get: async (req: Request, res: Response) => {
    try {
      const users = await Contact.find();
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },

  getById: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const contact = await Contact.findById(id);

      if (!contact) {
        return res.status(404).json({ Message: "Contact not found" });
      }

      return res.status(200).json(contact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },

  getByUserId: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const contacts = await Contact.aggregate([
        {
          $match: {
            contactId: id,
          },
        },
        {
          $lookup: {
            from: "crowd",
            localField: "_id",
            foreignField: "contactId",
            as: "crowd",
          },
        },
      ]);

      if (contacts.length === 0) {
        return res.status(404).json({ Message: "Contacts not found" });
      }

      return res.status(200).json(contacts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },

  create: async (req: Request, res: Response) => {
    const {
      email,
      username,
      phoneNumber,
      firstname,
      lastname,
      contactId,
      address,
    } = req.body;

    try {
      const newUser = new Contact({
        email,
        contactId,
        username,
        firstname,
        phoneNumber,
        lastname,
        address,
      });

      await newUser.save();
      res.status(200).json({ Message: "Insert Success" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ Message: "Internal Server Error" });
    }
  },
};
