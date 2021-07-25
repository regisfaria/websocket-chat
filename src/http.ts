import 'reflect-metadata';

import path from 'path';
import express from 'express';
import mongoose from 'mongoose';

import { createServer } from 'http';
import { Server as WebsocketServer } from 'socket.io';

const app = express();

mongoose.connect(
  'mongodb://localhost/rocketsocket', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const server = createServer(app);

app.use(
  express.static(
    path.join(
      __dirname,
      '..',
      'public'
    )
  )
);

const websocket = new WebsocketServer(server);

websocket.on('connection', (socket) => {
  console.log('🆕 Socket ID:', socket.id);
})

app.get('/ping', (request, response) => {
  return response.json({ ok: true, message: 'pong' });
})

export { server, websocket }