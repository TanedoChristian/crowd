import { Schema, model } from "mongoose";

import IContact from "../interfaces/IContact";

const contactSchema = new Schema<IContact>({
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  lastname: { type: String, required: true },
  address: String,
  contactId: String,
});

const Contact = model<IContact>("Contact", contactSchema);

export default Contact;
