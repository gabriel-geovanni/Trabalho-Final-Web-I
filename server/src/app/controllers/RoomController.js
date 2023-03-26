const RoomRepository = require('../repositories/RoomRepository');

class RoomController {
  async index(request, response) {
    const { orderBy } = request.query;
    const room = await RoomRepository.findAll(orderBy);

    response.send(room);
  }

  async showById(request, response) {
    const { id } = request.params;
    const room = await RoomRepository.findById(id);

    if (!room) {
      return response.status(400).json({ error: 'Reserva não encontrada' });
    }

    response.send(room);
  }

  async showByName(request, response) {
    const { name } = request.body;
    const rooms = await RoomRepository.findByname(name);

    if (!rooms) {
      return response.status(400).json({ errro: 'Não há salas de reuniões com esse nome' });
    }

    response.send(rooms);
  }

  async showByBuilding(request, response) {
    const { building } = request.body;
    const rooms = await RoomRepository.findByBuilding(building);

    if (!rooms) {
      return response.status(400).json({ error: 'Não existe sala de reuniões nesse bloco' });
    }

    response.send(rooms);
  }

  async store(request, response) {
    const {
      name, num, building,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Informe o nome da sala' });
    }

    if (!num) {
      return response.status(400).json({ error: 'Informe o número da sala' });
    }

    if (!building) {
      return response.status(400).json({ error: 'Informe o bloco da sala' });
    }

    const room = await RoomRepository.create({
      name, num, building,
    });

    response.send(room);
  }

  async update(request, response) {
    const {
      id, name, num, building,
    } = request.body;

    if (!id) {
      return response.status(400).json({ error: 'Sala de reuniões não encontrada' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Digite o nome da sala' });
    }

    if (!num) {
      return response.status(400).json({ error: 'Informe o número da sala' });
    }

    if (!building) {
      return response.status(400).json({ error: 'Informe o bloco da sala' });
    }

    const room = await RoomRepository.update(id, {
      name, num, building,
    });

    response.send(room);
  }

  async delete(request, response) {
    const { id } = request.params;

    await RoomRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new RoomController();
