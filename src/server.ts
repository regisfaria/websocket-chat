import path from 'path';
import express from 'express';

import { createServer } from 'http';
import { Server as WebsocketServer } from 'socket.io';

const app = express();

const server = createServer(app);

app.use(express.static(path.join(__dirname, '..', 'public')));

const websocket = new WebsocketServer(server);

websocket.on('connection', (socket) => {
  console.log('Socket', socket.id);
})

app.get('/ping', (request, response) => {
  return response.json({ ok: true, message: 'pong' });
})

server.listen(3000, () => console.log('🚀 Server is running on port: 3000 🚀'));