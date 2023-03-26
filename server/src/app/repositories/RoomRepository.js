const query = require('../../database/index');

class RoomRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await query(`SELECT * FROM rooms ORDER BY name ${direction}`);

    return rows;
  }

  async findById(id) {
    const row = await query('SELECT * FROM rooms WHERE id = $1', [id]);

    return row;
  }

  async findByname(name) {
    const rows = await query('SELECT * FROM rooms WHERE name = $1', [name]);

    return rows;
  }

  async findByBuilding(building) {
    const rows = await query('SELECT * FROM rooms WHERE building = $1', [building]);

    return rows;
  }

  async create({
    name, num, building,
  }) {
    const [row] = await query(`
        INSERT INTO  rooms (name, num, building)
        VALUES ($1, $2, $3)
        RETURNING *
        `, [name, num, building]);

    return row;
  }

  async update(id, {
    name, num, building,
  }) {
    const [row] = await query(`
        UPDATE rooms
        SET name = $1, num = $2, building = $3
        WHERE id = $4
        RETURNING *
    `, [name, num, building, id]);

    return row;
  }

  async delete(id) {
    const deleteOP = await query('DELETE FROM rooms WHERE id = $1', [id]);

    return deleteOP;
  }
}

module.exports = new RoomRepository();
