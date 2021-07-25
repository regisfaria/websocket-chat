import { container } from 'tsyringe';

import { websocket } from '../http';

import { CreateUserService } from '../services/CreateUserService';

websocket.on('connect', socket => {
  socket.on('start', async data => {
    const { email, avatar, name } = data;

    const createUserService = container.resolve(CreateUserService);

    const user = await createUserService.execute({
      email,
      socket_id: socket.id,
      avatar,
      name,
    });

    console.log(user);
  });
});