import { websocket } from '../http';

websocket.on('connect', socket => {
  socket.emit('chat_started', {
    message: "Your chat was started",
  });
});