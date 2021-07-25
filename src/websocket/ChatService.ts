import { container } from 'tsyringe';

import { websocket } from '../http';

import { CreateUserService } from '../services/CreateUserService';
import { GetAllUsersService } from '../services/GetAllUsersService';

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

    socket.broadcast.emit('new_users', user);
  });

  socket.on('get_users', async (callback) => {
    const getAllUsersService = container.resolve(GetAllUsersService);

    const users = await getAllUsersService.execute();

    callback(users);
  })
});