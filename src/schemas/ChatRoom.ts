import mongoose, { Document, Schema } from 'mongoose';
import { v4 as uuidV4 } from 'uuid';

import { User } from './User';

type ChatRoom = Document & {
  users_id: User[];
  room_id: String;
}

const ChatRoomSchema = new Schema({
  users_id: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Users'
    },
  ],
  room_id: {
    type: String,
    default: uuidV4(),
  }
});

const ChatRoom = mongoose.model<ChatRoom>('ChatRooms', ChatRoomSchema);

export { ChatRoom }