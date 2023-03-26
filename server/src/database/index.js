const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'meetingrooms',
});

const query = async (props, value) => {
  const client = await pool.connect();
  try {
    if (value) {
      const response = await client.query(props, value);
      client.release();
      return response.rows;
    }
    const response = await client.query(props);
    client.release();
    return response.rows;
  } catch (error) {
    console.log('ERROR ', error);
    client.release();
    throw error;
  }
};

module.exports = query;
