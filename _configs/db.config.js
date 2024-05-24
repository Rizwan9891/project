import mysql from 'mysql';

//  Development Database
const pool = mysql.createPool({
  connectionLimit: 4,
  host: 'ebhuktan-dev.clguqgk8obs4.ap-south-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'Ebhuktan123',
  database: 'Ebhuktan',
});

pool.getConnection((err, connection) => {
  if (err) {
    switch (err.code) {
      case 'PROTOCOL_CONNECTION_LOST':
        console.log('Database connection was closed.');
        break;
      case 'ER_CON_COUNT_ERROR':
        console.log('Database has too many connections.');
        break;
      case 'PROTOCOL_SEQUENCE_TIMEOUT':
        console.log('Database connection timeout.');
        break;
      case 'ECONNREFUSED':
        console.log('Database connection was refused.');
        break;
      default:
        console.log('Database connection error: ', err.message);
    }
  } else {
    console.log('Database connected successfully.');
    connection.release();
  }
});

export default pool;