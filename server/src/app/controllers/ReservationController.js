const ReservationRepository = require('../repositories/ReservationRepository');
const RoomRepository = require('../repositories/RoomRepository');

class ReservationController {
  async index(request, response) {
    const { orderBy } = request.query;
    const reservation = await ReservationRepository.findAll(orderBy);
    const list = await Promise.all(reservation.map(async (booking) => {
      const room = await RoomRepository.findById(booking.roomid);
      return { ...booking, room: room[0] };
    }));

    response.send(list);
  }

  async showById(request, response) {
    const { id } = request.body;
    const reservation = await ReservationRepository.findById(id);

    if (!reservation) {
      return response.status(400).json({ error: 'Reserva não encontrada' });
    }

    const room = await RoomRepository.findById(reservation.roomid);

    response.send({ ...reservation, room: room[0] });
  }

  async showByDate(request, response) {
    const { bookingdate, id } = request.body;
    const reservations = await ReservationRepository.findByDate(bookingdate, id);
    const list = await Promise.all(reservations.map(async (booking) => {
      const room = await RoomRepository.findById(booking.roomid);
      return { ...booking, room: room[0] };
    }));

    if (!reservations) {
      return response.status(400).json({ error: 'Não há reservas nessa data' });
    }

    response.send(list);
  }

  async showByUser(request, response) {
    const { userId } = request.body;
    const reservations = await ReservationRepository.findByUser(userId);
    const list = await Promise.all(reservations.map(async (booking) => {
      const room = await RoomRepository.findById(booking.roomid);
      return { ...booking, room: room[0] };
    }));

    if (!reservations) {
      return response.status(400).json({ error: 'Não há reservas feitas pelo usuário' });
    }

    response.send(list);
  }

  async showByRoom(request, response) {
    const { roomId } = request.body;
    const reservations = await ReservationRepository.findByRoom(roomId);
    const list = await Promise.all(reservations.map(async (booking) => {
      const room = await RoomRepository.findById(booking.roomid);
      return { ...booking, room: room[0] };
    }));

    if (!reservations) {
      return response.status(400).json({ error: 'Ainda não há reservas nessa sala' });
    }

    response.send(list);
  }

  async store(request, response) {
    const {
      description, bookingdate, bookingstart, bookingend, userid, id,
    } = request.body;

    if (!bookingdate) {
      return response.status(400).json({ error: 'Data de reserva inválida' });
    }

    if (!bookingstart) {
      return response.status(400).json({ error: 'Horário inválido' });
    }

    if (!bookingend) {
      return response.status(400).json({ error: 'Horário inválido' });
    }

    const reservationExists = await ReservationRepository.validateReservation(bookingdate, bookingstart, bookingend);
    if (reservationExists) {
      return response.status(400).json({ error: 'Horário indisponível' });
    }

    if (!userid) {
      return response.status(400).json({ error: 'E-mail inválido' });
    }

    if (!id) {
      return response.status(400).json({ error: 'Essa sala não existe' });
    }

    const reservation = await ReservationRepository.create({
      description, bookingdate, bookingstart, bookingend, userid, id,
    });

    response.send(reservation);
  }

  async update(request, response) {
    const {
      id, description, bookingDate, bookingStart, bookingEnd, userId, roomId,
    } = request.body;

    const reservationExists = await ReservationRepository.validateReservation(bookingDate, bookingStart, bookingEnd);
    if (reservationExists) {
      return response.status(400).json({ error: 'Horário indisponível' });
    }

    if (!bookingDate) {
      return response.status(400).json({ error: 'Data de reserva inválida' });
    }

    if (!bookingStart) {
      return response.status(400).json({ error: 'Horário inválido' });
    }

    if (!bookingEnd) {
      return response.status(400).json({ error: 'Horário inválido' });
    }

    if (!userId) {
      return response.status(400).json({ error: 'E-mail inválido' });
    }

    if (!roomId) {
      return response.status(400).json({ error: 'Essa sala não existe' });
    }

    const reservation = await ReservationRepository.update(id, {
      description, bookingDate, bookingStart, bookingEnd, userId, roomId,
    });

    response.send(reservation);
  }

  async delete(request, response) {
    const { id } = request.params;

    await ReservationRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new ReservationController();
