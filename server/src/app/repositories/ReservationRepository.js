const query = require('../../database/index');

class ReservationRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await query(`SELECT * FROM reservations ORDER BY bookingDate ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await query('SELECT * FROM reservations WHERE id = $1', [id]);

    return row;
  }

  async findByDate(bookingDate, id) {
    const rows = await query('SELECT * FROM reservations WHERE bookingdate = $1 AND roomid = $2', [bookingDate, id]);

    return rows;
  }

  async findByUser(userID) {
    const rows = await query('SELECT * FROM reservations WHERE userID = $1', [userID]);

    return rows;
  }

  async findByRoom(roomID) {
    const rows = await query('SELECT * FROM reservations WHERE roomID = $1', [roomID]);

    return rows;
  }

  async validateReservation(bookingDate, bookingStart, bookingEnd) {
    const reservation = await this.findByDate(bookingDate);
    let exists = null;
    if (reservation.length) {
      const dateStartResquest = new Date(`${bookingDate}T${bookingStart}`).getTime();
      const dateEndResquest = new Date(`${bookingDate}T${bookingEnd}`).getTime();
      reservation.map((booking) => {
        const bookingStart1 = new Date(`${booking.bookingdate}T${booking.bookingstart}`).getTime();
        const bookingEnd1 = new Date(`${booking.bookingdate}T${booking.bookingend}`).getTime();

        if (dateStartResquest > bookingEnd1 || dateEndResquest < bookingStart1) {
          return true;
        }
        exists = booking;
        return false;
      });
    }

    return exists;
  }

  async create({
    description, bookingdate, bookingstart, bookingend, userid, id,
  }) {
    const [row] = await query(`
        INSERT INTO reservations (description, bookingdate, bookingstart, bookingend, userid, roomid)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `, [description, bookingdate, bookingstart, bookingend, userid, id]);

    return row;
  }

  async update(id, {
    description, bookingDate, bookingStart, bookingEnd, userId, roomId,
  }) {
    const [row] = await query(`
        UPDATE reservations
        SET description = $1, bookingDate = $2, bookingStart = $3, bookingEnd = $4, userId = $5, roomId = $6
        WHERE id = $7
        RETURNING *
    `, [description, bookingDate, bookingStart, bookingEnd, userId, roomId, id]);

    return row;
  }

  async delete(id) {
    const deleteOP = await query('DELETE FROM reservations WHERE id =$1', [id]);

    return deleteOP;
  }
}

module.exports = new ReservationRepository();
