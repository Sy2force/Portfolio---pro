import mongoose from "mongoose"

const ContactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      default: "",
      trim: true,
    },
    type: {
      type: String,
      enum: ["recruteur", "startup", "partenariat", "autre"],
      default: "autre",
    },
    subject: {
      type: String,
      trim: true,
      default: "",
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["nouveau", "lu", "archive"],
      default: "nouveau",
    },
  },
  { timestamps: true }
)

const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", ContactMessageSchema)

export default ContactMessage
