import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMessage extends Document {
  userMessage: string;
  botReply: string;
  createdAt: Date;
  sessionId?: string;
}

const MessageSchema: Schema<IMessage> = new Schema(
  {
    userMessage: {
      type: String,
      required: [true, "User message is required"],
      trim: true,
      maxlength: [2000, "Message too long"],
    },
    botReply: {
      type: String,
      required: [true, "Bot reply is required"],
    },
    sessionId: {
      type: String,
      default: "anonymous",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model re-compilation in hot-reload
const Message: Model<IMessage> =
  mongoose.models.Message ||
  mongoose.model<IMessage>("Message", MessageSchema);

export default Message;
